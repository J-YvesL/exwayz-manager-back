/**
 * Watch node Express server configuration
 */
export interface ExpressConfig {
  protocol: string;
  hostname: string;
  port: number;
  corsEnabled: boolean;
  servicesEndpoint: {
    commands: string;
    status: string;
  };
}

/**
 * Watch node global configuration
 */
export interface AppConfig {
  logs: LogsConfig;
  express: ExpressConfig;
}

/**
 * Application logs configuration
 */
export interface LogsConfig {
  dirname: string;
  level: string;
}
