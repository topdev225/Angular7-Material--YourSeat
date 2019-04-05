import {Entity, ManyToOne, JoinColumn, Column} from 'typeorm';
import { BaseEntity } from './common/base-entity';
import { User } from './user.entity';
import { Role } from './role.entity';
import { Agency } from './agency.entity';
import { Program } from './program.entity';

@Entity()
export class AgencyProgram extends BaseEntity {
  @Column()
  agencyId: string;

  @Column()
  programId: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  busAccessible: boolean;

  @Column({ nullable: true })
  metroAccessible: boolean;

  @Column('text', { nullable: true })
  description: string;

  @ManyToOne(() => Agency)
  agency?: Agency;

  @ManyToOne(() => Program)
  program?: Program;
}
