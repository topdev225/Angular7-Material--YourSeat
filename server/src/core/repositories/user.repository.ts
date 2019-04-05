import { Inject } from '@nestjs/common';
import { DB_CONNECTION_TOKEN } from 'core/typeorm/constants';
import { Actor } from 'core/model/entities/actor.entity';
import { User } from 'core/model/entities/user.entity';
import * as bcrypt from 'bcrypt-nodejs';
import { Family } from 'core/model/entities/family.entity';
import { EntityManager, EntityRepository, Repository, Connection } from 'typeorm';
import { SignupInput, UserInput } from 'core/model/__generated/graphql.schema';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  userRepository: Repository<User>;
  actorRepository: Repository<Actor>;
  constructor(@Inject(DB_CONNECTION_TOKEN) private connection: Connection, public manager: EntityManager) {
    super();
    this.userRepository = this.connection.getRepository(User);
    this.actorRepository = this.connection.getRepository(Actor);
  }

  async createUser(input: Partial<UserInput>): Promise<User> {
    const actor = this.actorRepository.create();
    await this.actorRepository.save(actor);

    if (input.password) {
      input.password = bcrypt.hashSync(input.password);
    }
    const newUser = this.userRepository.create(input);

    newUser.actor = actor;
    return this.userRepository.save(newUser);
  }
}
