import {Entity, ManyToOne, JoinColumn, Column} from 'typeorm';
import { BaseEntity } from './common/base-entity';
import { User } from './user.entity';
import { Role } from './role.entity';
import { ClientAgencyProgram } from './client-agency-program.entity';
import { Employee } from './employee.entity';

@Entity()
export class Comment extends BaseEntity {
  @Column()
  clientAgencyProgramId: string;

  @Column()
  employeeId: string;

  @Column('text')
  content: string;

  @ManyToOne(() => ClientAgencyProgram)
  clientAgencyProgram?: ClientAgencyProgram;

  @ManyToOne(() => Employee)
  employee?: Employee;
}
