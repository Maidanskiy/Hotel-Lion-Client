import { Controller, Post, Body, UsePipes } from '@nestjs/common'
import { CreateProfileDto } from './dto/create-profile.dto'

/**
 * Profile Controller
 */
@Controller('profile')
export class ProfileController {

  /**
   * Creates new profile
   * @param createProfile
   */
  @Post()
  public create(
    @Body() createProfile: CreateProfileDto
  ): void {
    // save profile into DB
  }

}
