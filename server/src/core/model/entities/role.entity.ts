import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './common/base-entity';

@Entity()
export class Role extends BaseEntity {
  @Column()
  label: string;

  @Column()
  name: string;
}
