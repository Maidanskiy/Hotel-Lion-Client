import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as swaggerUI from 'swagger-ui-express'
import * as YAML from 'yamljs'

const docs = YAML.load(__dirname + '/../docs.yaml');

(async () => {

  const app = await NestFactory.create(AppModule, {
    logger: console
  })

  // use global prefix
  app.setGlobalPrefix('client/api')

  // adds CORS
  app.enableCors({
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: ['Authorization']
  })

  // health check
  app.use('/client/api/health', (req, res) => res.end(`I'm alive`) )

  // web docs
  app.use('/client/api/docs', swaggerUI.serve, swaggerUI.setup(docs))

  await app.listen(process.env.PORT || 3000)

})()
