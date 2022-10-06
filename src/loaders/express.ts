import express from 'express';
import cors from 'cors';
import config from 'config';
import routes from '@/api';
import { ExpressConfig } from '@/models/config';

const expressConfig: ExpressConfig = config.get('express');

const corsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200
};

export default ({ app }: { app: express.Application }) => {
  if (expressConfig.corsEnabled) {
    app.use(cors(corsOptions));
  }
  // Application API routes
  app.use(routes());
};
