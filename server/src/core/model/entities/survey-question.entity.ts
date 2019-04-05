import { Entity, Column, ManyToOne } from 'typeorm';

import { BaseEntity } from './common/base-entity';
import { Survey } from './survey.entity';

@Entity()
export class SurveyQuestion extends BaseEntity {
  @Column()
  surveyId: string;

  @Column('enum', { enum: ['ASC', 'DESC'] })
  sortOrder: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  theme: string;

  @Column()
  type: string;
  
  @ManyToOne(() => Survey)
  survey?: Survey;
}