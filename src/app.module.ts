import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { EnvModule } from './env/env.module'
import { AppLogger } from './app.logger'
import { EmailModule } from './email/email.module'
import { ProfileModule } from './profile/profile.module'

/**
 * Main Application Module
 */
@Module({
  providers: [AppLogger],
  imports: [
    EnvModule, EmailModule, ProfileModule,
    MongooseModule.forRoot(String(process.env.MONGODB_URI))
  ]
})
export class AppModule {

  constructor(private readonly _AppLogger: AppLogger) {}

  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(this._AppLogger.log())
      .forRoutes('/')
  }

}
