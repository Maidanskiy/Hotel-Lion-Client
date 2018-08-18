import { Injectable } from '@nestjs/common'
import { CreateProfileDto } from './dto/create-profile.dto'
import { ProfileRepository } from './profile.repository'

/**
 * Profile Service
 * Contains logic level for profile
 */
@Injectable()
export class ProfileService {

  constructor(private readonly _ProfileRepository: ProfileRepository) {}

  /**
   * Creates new profile
   * @param profile CreateProfileDto
   * @return void
   */
  public async createProfile(profile: CreateProfileDto): Promise<void> {
    await this._ProfileRepository.saveProfile(profile)
  }

}
