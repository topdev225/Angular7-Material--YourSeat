import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
import { CoreproModule } from 'shared/corepro/corepro.module';
import { TypeormCoreModule } from 'core/typeorm/typeorm-core.module';

@Module({
  imports: [CoreproModule, TypeormCoreModule],
  providers: [FamilyService],
  exports: [FamilyService]
})
export class CoreServicesModule {}
