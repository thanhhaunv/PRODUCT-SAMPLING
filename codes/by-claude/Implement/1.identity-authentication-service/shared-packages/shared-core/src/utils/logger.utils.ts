import winston from 'winston';

/**
 * Logger utility using Winston
 * Refs: SRS Part02.8 Technical Requirements, EMSA-v1.0 logging standards
 */
export class Logger {
  private static instance: winston.Logger;

  private static createLogger(): winston.Logger {
    const logFormat = winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.errors({ stack: true }),
      winston.format.printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} ${level}: ${stack || message}`;
      })
    );

    return winston.createLogger({
      level: process.env.LOG_LEVEL || 'info',
      format: logFormat,
      defaultMeta: { service: 'psp-platform' },
      transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            logFormat
          )
        })
      ],
    });
  }

  public static getInstance(): winston.Logger {
    if (!Logger.instance) {
      Logger.instance = Logger.createLogger();
    }
    return Logger.instance;
  }

  public static info(message: string, meta?: any): void {
    Logger.getInstance().info(message, meta);
  }

  public static error(message: string, error?: Error, meta?: any): void {
    Logger.getInstance().error(message, { error: error?.stack, ...meta });
  }

  public static warn(message: string, meta?: any): void {
    Logger.getInstance().warn(message, meta);
  }

  public static debug(message: string, meta?: any): void {
    Logger.getInstance().debug(message, meta);
  }
}
