import { Get, Controller } from '@nestjs/common'

@Controller('/hello')
export class AppController {

    @Get()
    public root(): string {
        return 'Hello world!'
    }
}
