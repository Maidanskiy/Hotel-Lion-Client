import * as dotenv from 'dotenv'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as swaggerUI from 'swagger-ui-express'
import * as YAML from 'yamljs'

dotenv.config()

const docs = YAML.load(__dirname + '/../docs.yaml');

(async () => {
  const app = await NestFactory.create(AppModule)
  app.use('/client/api/docs', swaggerUI.serve, swaggerUI.setup(docs))
  await app.listen(process.env.PORT || 3000)
})()
