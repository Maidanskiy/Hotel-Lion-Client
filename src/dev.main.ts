import * as dotenv from 'dotenv'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

dotenv.config();

(async () => {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT || 3000)
})()
