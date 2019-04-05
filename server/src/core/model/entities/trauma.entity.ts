import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './common/base-entity';
import { Client } from './client.entity';

@Entity()
export class Trauma extends BaseEntity {
  @Column()
  name: string;
  
  @Column()
  clientId: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'clientId' })
  client?: Client;
}
