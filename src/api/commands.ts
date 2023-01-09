import { Router } from 'express';
import config from 'config';
import { ExpressConfig } from '@/models/config';
import * as Commands from '@/controllers/commands';

const route = Router();
const expressConfig: ExpressConfig = config.get('express');

export default (app: Router) => {
  app.use(expressConfig.servicesEndpoint.commands, route);

  route.get('/start', async (req, res, next) => {
    await Commands.startSlam()
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/stop', async (req, res, next) => {
    await Commands.stopSlam()
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/map_start/:map', async (req, res, next) => {
    const mapName = req.params.map;
    await Commands.startMap(mapName)
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/map_stop', async (req, res, next) => {
    await Commands.stopMap()
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/load_reloc/:map', async (req, res, next) => {
    const mapName = req.params.map;
    await Commands.loadMap(mapName)
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/delete_map/:map', async (req, res, next) => {
    const mapName = req.params.map;
    await Commands.deleteMap(mapName)
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/visualize_map/:map', async (req, res, next) => {
    const mapName = req.params.map;
    await Commands.visualizeMap(mapName)
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/reloc_initialize', async (req, res, next) => {
    const reloc_x = req.query.x;
    const reloc_y = req.query.y;
    const reloc_z = req.query.z;
    const reloc_angle = req.query.angle;

    if (validParam(reloc_x) && validParam(reloc_y) && validParam(reloc_z) && validParam(reloc_angle)) {
      await Commands.initializeReloc(reloc_x as string, reloc_y as string, reloc_z as string, reloc_angle as string)
        .then(() => {
          return res.status(200).send();
        })
        .catch(() => {
          return res.status(500).send();
        });
    } else {
      return res.status(422).send();
    }
  });

  function validParam(param: unknown): boolean {
    const regex = /^[0-9]+([\.,][0-9])?[0-9]*$/;
    return param !== undefined && typeof param === 'string' && param.match(regex) !== null;
  }

  route.get('/set_profile', async (req, res, next) => {
    const algo = req.query.algo;
    const value = req.query.value;

    await Commands.setProfile(algo as string, value as string)
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/reloc_stop', async (req, res, next) => {
    await Commands.stopReloc()
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/reloc_start', async (req, res, next) => {
    await Commands.startReloc()
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/reloc_reinit', async (req, res, next) => {
    await Commands.reinitReloc()
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });

  route.get('/stop_all', async (req, res, next) => {
    await Commands.stopAll()
      .then(() => {
        return res.status(200).send();
      })
      .catch(() => {
        return res.status(500).send();
      });
  });
};
