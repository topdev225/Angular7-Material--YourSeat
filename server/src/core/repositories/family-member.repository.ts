import {
  AccountEarnings,
  AccountEarningsTypesEnum,
} from 'core/model/entities/account-earnings.entity';
import { FamilyMember } from 'core/model/entities/family-member.entity';
import { Family } from 'core/model/entities/family.entity';
import { EntityManager, EntityRepository, Repository } from 'typeorm';

@EntityRepository(Family)
export class FamilyMemberRepository extends Repository<FamilyMember> {
  accountEarningsRepository: Repository<AccountEarnings>;

  constructor(public manager: EntityManager) {
    super();
  }

  async getEarningsAccount(
    childId: string,
    type: AccountEarningsTypesEnum,
  ): Promise<AccountEarnings> {
    const child = await this.findOne({ id: childId });
    const account = await this.accountEarningsRepository
      .createQueryBuilder('earnings')
      .innerJoin('earnings.accountEarningsType', 'type')
      .innerJoinAndSelect('earnings.account', 'account')
      .where('type.name = :name', { name: type })
      .andWhere('earnings.userId = :userId', { userId: child.userId })
      .getOne();

    if (!account) {
      throw new Error('Child account not found');
    }

    return account;
  }
}
