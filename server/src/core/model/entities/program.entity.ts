import { Entity, Column } from 'typeorm';

import { BaseEntity } from './common/base-entity';

@Entity()
export class Program extends BaseEntity {
  @Column()
  name: string;
}