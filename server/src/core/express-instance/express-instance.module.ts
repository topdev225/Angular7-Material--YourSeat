import { ExpressInstanceService } from './express-instance.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ ExpressInstanceService ],
  exports: [ ExpressInstanceService ],
})
export class ExpressInstanceModule {

}