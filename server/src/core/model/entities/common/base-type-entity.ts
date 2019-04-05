import { BaseEntity } from './base-entity';
import { Column } from 'typeorm';

export abstract class BaseTypeEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    label: string;
}
