import { Column } from 'typeorm';
import { BaseEntity } from './base-entity';

export abstract class BaseAddressEntity extends BaseEntity {
    @Column()
    country: string;

    @Column()
    state: string;

    @Column()
    street: string;

    @Column({ nullable: true })
    streetSecondary?: string;

    @Column()
    zip: string;
}
