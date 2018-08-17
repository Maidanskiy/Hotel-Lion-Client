import * as winston from 'winston'
import * as expressWinston from 'express-winston'

export default {

  info: expressWinston.logger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true,
        stringify: process.env.NODE_ENV === 'production'
      })
    ],
    bodyBlacklist: ['password', 'login'],
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true
  }),

  error: expressWinston.errorLogger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true,
        stringify: process.env.NODE_ENV === 'production'
      })
    ]
  })

}
