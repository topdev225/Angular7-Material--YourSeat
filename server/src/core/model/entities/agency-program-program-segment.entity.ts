import { Column, Entity, ManyToOne } from 'typeorm';

import { AgencyProgram } from './agency-program.entity';
import { BaseEntity } from './common/base-entity';
import { ProgramSegment } from './program-segment.entity';

@Entity()
export class AgencyProgramProgramSegment extends BaseEntity {
  @Column({ nullable: true })
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column()
  agencyProgramId: string;

  @Column()
  programSegmentId: string;

  @ManyToOne(() => AgencyProgram)
  agencyProgram?: AgencyProgram;

  @ManyToOne(() => ProgramSegment)
  programSegment?: ProgramSegment;
}
