import { Injectable } from '@nestjs/common'
import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import { EnvService } from './env/env.service'

/**
 * Application Logger
 */
@Injectable()
export class AppLogger {

  constructor(private readonly _EnvService: EnvService) {}

  public log() {
    return expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true,
          stringify: this._EnvService.isProduction()
        })
      ],
      bodyBlacklist: ['password', 'login'],
      msg: 'HTTP {{req.method}} {{req.url}}',
      expressFormat: true
    })
  }

  public error() {
    return expressWinston.errorLogger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true,
          stringify: this._EnvService.isProduction()
        })
      ]
    })
  }

}
