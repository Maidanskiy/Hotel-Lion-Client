import { IsString, MinLength } from 'class-validator'

/**
 * Create Profile Model
 */
export class CreateProfileDto {

  @IsString()
  public readonly email: string

  @MinLength(8, {
    message: 'Password is to short'
  })
  public readonly password: string

}
