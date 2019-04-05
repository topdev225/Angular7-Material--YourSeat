import { Entity, Column, ManyToOne } from 'typeorm';

import { BaseEntity } from './common/base-entity';
import { Employee } from './employee.entity';
import { County } from './county.entity';

@Entity()
export class EmployeeCounty extends BaseEntity {
  @Column()
  employeeId: string;

  @Column()
  countyId: string;

  @ManyToOne(() => Employee)
  employee?: Employee;

  @ManyToOne(() => County)
  county?: County;
}