import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './common/base-entity';
import { User } from './user.entity';

@Entity()
export class Employee extends BaseEntity {  
  @Column('enum', { enum: ['PROVIDER', 'CASE_WORKER', 'UNIT_SUPERVISOR', 'DIRECTOR'] })
  employeeType: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user?: User;
}
