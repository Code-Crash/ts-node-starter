import {CONSOLE} from './constants';

// TODO: We can integrate any third party logger here
export default class Logger {
  static readonly config: any = {
    debug: true,
    info: true,
    warn: true,
    error: true,
  };

  static getPrefix(type: string) {
    return `[${new Date().toISOString()}] ${(type || '').toUpperCase()}`;
  }

  static debug(...args: any) {
    if (args && args.length && Logger.config.debug) {
      // tslint:disable-next-line:no-console
      console.debug(Logger.getPrefix(CONSOLE.debug), ...args);
    }
  }

  static info(...args: any) {
    if (args && args.length && (Logger.config.debug || Logger.config.info)) {
      // tslint:disable-next-line:no-console
      console.info(Logger.getPrefix(CONSOLE.info), ...args);
    }
  }

  static warn(...args: any) {
    if (args && args.length && (Logger.config.debug || Logger.config.warn)) {
      // tslint:disable-next-line:no-console
      console.warn(Logger.getPrefix(CONSOLE.warn), ...args);
    }
  }

  static error(...args: any) {
    if (args && args.length && (Logger.config.debug || Logger.config.error)) {
      // tslint:disable-next-line:no-console
      console.error(Logger.getPrefix(CONSOLE.error), ...args);
    }
  }
}
