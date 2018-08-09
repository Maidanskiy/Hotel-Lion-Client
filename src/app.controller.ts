import { Get, Controller } from '@nestjs/common'

@Controller('/hi')
export class AppController {

    @Get()
    public root(): string {
        return 'Hello world!'
    }
}
