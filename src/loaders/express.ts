import fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors';
import config from 'config';
import routes from '@/api';
import { ExpressConfig } from '@/models/config';

const expressConfig: ExpressConfig = config.get('express');
const rootDir = findRootDir(__dirname);

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

  // Application API routes
  app.use('/api', routes());

  if (rootDir) {
    const staticPath = path.join(rootDir, 'static');
    app.use(express.static(staticPath, { maxAge: '1d' }));
    app.get('*', function (_, res) {
      res.sendFile(path.join(staticPath, 'index.html'));
    });
  } else {
    throw new Error('Root directory not found.');
  }
};

/**
 * Recursive search for root directory. The recursive function search for
 * the file package.json
 * @param currentDir
 * @returns
 */
function findRootDir(currentDir: string): string | null {
  if (fs.existsSync(path.join(currentDir, 'package.json'))) {
    return currentDir;
  }
  const parentDir = path.join(currentDir, '..');
  if (parentDir === currentDir) {
    return null;
  }
  return findRootDir(parentDir);
}
