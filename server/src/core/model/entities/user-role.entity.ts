import {Entity, ManyToOne, JoinColumn} from 'typeorm';
import { BaseEntity } from './common/base-entity';
import { User } from './user.entity';
import { Role } from './role.entity';

@Entity()
export class UserRole extends BaseEntity {
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user?: User;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'roleId' })
  role?: Role;
}
