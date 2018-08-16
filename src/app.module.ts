import { Module } from '@nestjs/common'
import { EnvModule } from './env/env.module'
import { UserModule } from './user/user.module'

@Module({
    imports: [EnvModule, UserModule]
})
export class AppModule {}
