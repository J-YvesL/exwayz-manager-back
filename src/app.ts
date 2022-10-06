import express from 'express';
import config from 'config';
import Logger from '@/loaders/logger';
import { ExpressConfig } from '@/models/config';

const expressConfig: ExpressConfig = config.get('express');

process.on('SIGINT', () => {
  console.log('Terminating...');
  process.exit(0);
});

process.on('exit', () => {
  Logger.info('Process exiting.');
  process.kill(process.pid, 'SIGTERM');
});

async function startServer() {
  const app = express();

  await require('./loaders')
    .default({ expressApp: app })
    .catch((err: any) => {
      Logger.error('loader error: ', {
        component: 'APP',
        stack: err.message
      });
      process.exit(1);
    });
  Logger.info('App configured. Starting...');

  app.listen(expressConfig.port, () => {
    Logger.info(
      `Express server started at ${expressConfig.protocol}://${expressConfig.hostname}:${expressConfig.port}`
    );
  });
}
startServer();
