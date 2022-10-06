import expressLoader from './express';
import Logger from '@/loaders/logger';

export default async ({ expressApp }: any) => {
  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');

  Logger.info('All module loaded successfully.');
};
