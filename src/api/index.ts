import { Router } from 'express';
import commands from './commands';
import status from './status';

export default () => {
  const app = Router();

  // Init routes
  commands(app);
  status(app);

  return app;
};
