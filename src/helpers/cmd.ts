import { exec } from 'child_process';
import LoggerInstance from '@/loaders/logger';

/**
 * Exec system command
 * @param command A shell command
 * @returns Stdout as string
 */
export function cmd(command: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        LoggerInstance.error(`cmd error: ${error.message}`);
        reject(error.message);
      }
      if (stderr) {
        LoggerInstance.error(`cmd stderr: ${stderr}`);
        reject(stderr);
      }
      resolve(stdout);
    });
  });
}
