import * as dotenv from 'dotenv'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

dotenv.config();

(async () => {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: ['Authorization']
  })
  await app.listen(process.env.PORT || 3000)
})()
