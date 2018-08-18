import { Module } from '@nestjs/common'
import { EmailService } from './email.service'

/**
 * Email Module
 */
@Module({
  providers: [EmailService],
  exports: [EmailService]
})
export class EmailModule {}
