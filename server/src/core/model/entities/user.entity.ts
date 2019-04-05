import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './common/base-entity';
import { pick, padStart } from 'lodash';
import * as moment from 'moment';
import { UserRole } from './user-role.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column('enum', { enum: ['MALE', 'FEMALE'], nullable: true })
  gender: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: true })
  dateOfBirth?: Date;

  @Column({ nullable: true, unique: true })
  email?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  profilePhotoUrl?: string;

  @OneToMany(() => UserRole, userRole => userRole.user)
  userRoles: UserRole[];
}
