import { Module } from '@nestjs/common';
import { ErrorMessagesService } from './services/error-messages.service';

@Module({
  providers: [ErrorMessagesService]
})
export class ErrorModule {}
