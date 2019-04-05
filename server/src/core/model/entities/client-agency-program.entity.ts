import {Entity, ManyToOne, JoinColumn, Column} from 'typeorm';
import { BaseEntity } from './common/base-entity';
import { User } from './user.entity';
import { Role } from './role.entity';
import { AgencyProgram } from './agency-program.entity';
import { Client } from './client.entity';

@Entity()
export class ClientAgencyProgram extends BaseEntity {
  @Column()
  clientId: string;

  @Column()
  agencyProgramId: string;

  @Column()
  enrollmentDate: Date;

  @Column({ nullable: true })
  completionDate: Date;

  @Column('enum', { enum: ['INCOMPLETED', 'IN_PROGRESS'] })
  status: string;

  @ManyToOne(() => Client)
  client?: Client;

  @ManyToOne(() => AgencyProgram)
  agencyProgram?: AgencyProgram;
}
