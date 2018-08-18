import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateProfileDto } from './dto/create-profile.dto'
import { IProfile } from './interfaces/profile.interface'

/**
 * Profile Repository
 */
@Injectable()
export class ProfileRepository {

  constructor(
    @InjectModel('Profile') private readonly Profile: Model<IProfile>
  ) {}

  /**
   * Saves new profile
   * @param profile CreateProfileDto
   * @return void
   */
  public async saveProfile(profile: CreateProfileDto): Promise<void> {
    await this.Profile.create(profile)
  }

}
