import winston from 'winston';
import 'winston-daily-rotate-file';
import config from 'config';
import { LogsConfig } from '@/models/config';

const logsConfig: LogsConfig = config.get('logs');

const transports = [];
if (process.env.NODE_ENV === 'production') {
  transports.push(
    new winston.transports.DailyRotateFile({
      dirname: logsConfig.dirname,
      filename: 'errors-%DATE%.log',
      datePattern: 'YYYYMMDD-HH',
      frequency: '1h',
      level: 'error',
      zippedArchive: true,
      maxSize: '20m',
      utc: true
      // maxFiles: '14d'
    }),
    new winston.transports.DailyRotateFile({
      dirname: logsConfig.dirname,
      filename: 'infos-%DATE%.log',
      datePattern: 'YYYYMMDD-HH',
      frequency: '1h',
      level: 'info',
      zippedArchive: true,
      maxSize: '20m',
      utc: true
      // maxFiles: '14d'
    })
  );
} else {
  transports.push(new winston.transports.Console());
}

const LoggerInstance = winston.createLogger({
  level: logsConfig.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DDTHH:mm:ss.sssZ'
    }),
    winston.format.json()
  ),
  transports: transports
});

export default LoggerInstance;
