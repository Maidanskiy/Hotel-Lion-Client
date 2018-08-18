import { Module } from '@nestjs/common'
import { ProfileController } from './profile.controller'
import { ProfileService } from './profile.service'

/**
 * Profile Module
 */
@Module({
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
