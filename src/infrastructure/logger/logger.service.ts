import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, format, Logger, transports } from 'winston';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomLoggerService implements LoggerService {
  private logger: Logger;

  constructor(private readonly configService: ConfigService) {
    this.logger = createLogger({
      level: configService.get('LOG_LEVEL') || 'info',
      format: format.combine(
        format.timestamp(),
        format.json(),
        format.prettyPrint(),
        format.colorize(),
      ),
      transports: [
        new transports.Console(),
        // new transports.File({ filename: 'error.log', level: 'error' }),
        // new transports.File({ filename: 'combined.log' }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
