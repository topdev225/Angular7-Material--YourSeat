import { Column, Entity, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { BaseEntity } from './common/base-entity';
import { User } from './user.entity';
import { Employee } from './employee.entity';

@Entity()
export class Case extends BaseEntity {  
  @Column()
  employeeId: string;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'employeeId' })
  employee?: Employee;
}