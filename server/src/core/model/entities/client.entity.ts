import { Entity, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./common/base-entity";
import { Case } from "./case.entity";

@Entity()
export class Client extends BaseEntity {    
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  middleName: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  zipCode: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column()
  caseId: string;

  @OneToOne(() => Case)
  @JoinColumn({ name: 'caseId' })
  case?: Case;
}