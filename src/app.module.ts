import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { EnvModule } from './env/env.module'
import { UserModule } from './user/user.module'
import { AppLogger } from './app.logger'
import { EmailModule } from './email/email.module'

@Module({
  providers: [AppLogger],
  imports: [EnvModule, UserModule, EmailModule]
})
export class AppModule {

  constructor(private readonly _AppLogger: AppLogger) {}

  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(this._AppLogger.log())
      .forRoutes('/')
  }

}
