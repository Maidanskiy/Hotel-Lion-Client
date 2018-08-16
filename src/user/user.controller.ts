import { Controller, Get, Param } from '@nestjs/common'

@Controller('users')
export class UserController {

  @Get(':id')
  public getUser(
    @Param('id') user_id: string
  ): string {
    return `${user_id}`
  }

}
