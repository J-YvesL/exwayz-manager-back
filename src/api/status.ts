import { Router } from 'express';
import config from 'config';
import { ExpressConfig } from '@/models/config';
import * as Status from '@/controllers/status';

const route = Router();
const expressConfig: ExpressConfig = config.get('express');

export default (app: Router) => {
  app.use(expressConfig.servicesEndpoint.status, route);

  route.get('/available_maps', async (req, res, next) => {
    const maps = await Status.availableMaps();
    return res.status(200).json(maps);
  });

  route.get('/all_profiles', async (req, res, next) => {
    const profiles = await Status.allProfiles();
    return res.status(200).json(profiles);
  });

  route.get('/current_profiles', async (req, res, next) => {
    const profiles = await Status.currentProfiles();
    return res.status(200).json(profiles);
  });

  route.get('/state', async (req, res, next) => {
    await Status.managerState()
      .then((state) => {
        return res.status(200).json(state);
      })
      .catch(() => {
        return res.status(500).send();
      });
  });
};
