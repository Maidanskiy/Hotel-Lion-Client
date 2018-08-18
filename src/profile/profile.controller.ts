import { Controller, Post, Body, UsePipes } from '@nestjs/common'
import { CreateProfileDto } from './dto/create-profile.dto'
import { ProfileService } from './profile.service'

/**
 * Profile Controller
 */
@Controller('profiles')
export class ProfileController {

  constructor(private readonly _ProfileService: ProfileService) {}

  /**
   * Creates new profile
   * @param createProfile CreateProfileDto
   * @return void
   */
  @Post()
  public async create(
    @Body() createProfile: CreateProfileDto
  ): Promise<void> {

    await this._ProfileService.createProfile(createProfile)

  }

}
