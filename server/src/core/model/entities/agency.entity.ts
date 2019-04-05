import { Entity, Column } from 'typeorm';

import { BaseEntity } from './common/base-entity';

@Entity()
export class Agency extends BaseEntity {
  @Column()
  name: string;
}