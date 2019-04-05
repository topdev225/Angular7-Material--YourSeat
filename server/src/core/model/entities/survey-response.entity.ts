import {Entity, ManyToOne, JoinColumn, Column} from 'typeorm';
import { BaseEntity } from './common/base-entity';
import { User } from './user.entity';
import { Role } from './role.entity';
import { SurveyQuestion } from './survey-question.entity';
import { Client } from './client.entity';

@Entity()
export class SurveyResponse extends BaseEntity {
  @Column()
  surveyQuestionId: string;

  @Column()
  clientId: string;  

  @Column('text')
  response: string;

  @ManyToOne(() => SurveyQuestion)
  surveyQuestion?: SurveyQuestion;

  @ManyToOne(() => Client)
  client?: Client;
}
