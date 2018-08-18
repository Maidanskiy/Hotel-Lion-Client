import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProfileController } from './profile.controller'
import { ProfileService } from './profile.service'
import { ProfileSchema } from './schemas/profile.schema'
import { ProfileRepository } from './profile.repository'

/**
 * Profile Module
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }])
  ],
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository]
})
export class ProfileModule {}
