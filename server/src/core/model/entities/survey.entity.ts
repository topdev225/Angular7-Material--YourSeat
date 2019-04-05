import { Column, Entity, ManyToOne } from 'typeorm';

import { AgencyProgram } from './agency-program.entity';
import { BaseEntity } from './common/base-entity';
import { ProgramSegment } from './program-segment.entity';

@Entity()
export class Survey extends BaseEntity {
  @Column()
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column()
  programSegmentId: string;

  @Column()
  agencyProgramId: string;

  @ManyToOne(() => AgencyProgram)
  agencyProgram?: AgencyProgram;

  @ManyToOne(() => ProgramSegment)
  programSegment?: ProgramSegment;
}
