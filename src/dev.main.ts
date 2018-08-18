import * as dotenv from 'dotenv'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as swaggerUI from 'swagger-ui-express'
import * as YAML from 'yamljs'

dotenv.config()

const docs = YAML.load(__dirname + '/../docs.yaml');

(async () => {

  const app = await NestFactory.create(AppModule, {
    logger: console
  })

  app.setGlobalPrefix('client/api')

  app.enableCors({
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: ['Authorization']
  })

  app.use('/client/api/docs', swaggerUI.serve, swaggerUI.setup(docs))

  await app.listen(process.env.PORT || 3000)

})()
