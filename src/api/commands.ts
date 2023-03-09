import { Router } from 'express';
import config from 'config';
import { ExpressConfig } from '@/models/config';
import * as Commands from '@/controllers/commands';

const route = Router();
const expressConfig: ExpressConfig = config.get('express');

export default (app: Router) => {
  app.use(expressConfig.servicesEndpoint.commands, route);

  route.get('/start/:vis', async (req, res, next) => {
    const vis = req.query.vis;
    await Commands.startSlam(vis as string)
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

  route.get('/map_start', async (req, res, next) => {
    const mapName = req.query.mapName;
    const vis = req.query.vis;
    await Commands.startMap(mapName as string, vis as string)
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

  route.get('/load_map/:map', async (req, res, next) => {
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

  route.get('/set_box_crop', async (req, res, next) => {
    const center_x = req.query.center_x;
    const center_y = req.query.center_y;
    const center_z = req.query.center_z;
    const size_x = req.query.size_x;
    const size_y = req.query.size_y;
    const size_z = req.query.size_z;
    const out = req.query.out;

    if (
      validParam(center_x) &&
      validParam(center_y) &&
      validParam(center_z) &&
      validParam(size_x) &&
      validParam(size_y) &&
      validParam(size_z)
    ) {
      await Commands.setCropBox(
        center_x as string,
        center_y as string,
        center_z as string,
        size_x as string,
        size_y as string,
        size_z as string,
        out as string
      )
        .then(() => {
          return res.status(200).send();
        })
        .catch(() => {
          return res.status(500).send();
        });
    }
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

  route.get('/reloc_start/:vis', async (req, res, next) => {
    const vis = req.query.vis;
    await Commands.startReloc(vis as string)
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
