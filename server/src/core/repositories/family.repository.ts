import { AccountBankConnector } from 'core/model/entities/account-bank-connector.entity';
import { AccountCreditCardConnector } from 'core/model/entities/account-credit-card-connector.entity';
import { Account } from 'core/model/entities/account.entity';
import { Family } from 'core/model/entities/family.entity';
import { AccountAccounttypeEnum } from 'core/model/__generated/graphql.schema';
import { EntityManager, EntityRepository, Repository } from 'typeorm';

@EntityRepository(Family)
export class FamilyRepository extends Repository<Family> {
  accountRepository: Repository<Account>;
  accountBankConnectorRepository: Repository<AccountBankConnector>;
  accountCreditCardConnectorRepository: Repository<AccountCreditCardConnector>;

  constructor(public manager: EntityManager) {
    super();
    this.accountRepository = this.manager.connection.getRepository(Account);
    this.accountBankConnectorRepository = this.manager.connection.getRepository(
      AccountBankConnector,
    );
  }

  async getFundingConcreteAccount(
    familyId: string,
  ): Promise<AccountBankConnector | AccountCreditCardConnector> {
    const family = await this.findOne({ id: familyId });

    if (!family.fundingAccountId) {
      return null;
    }

    const account = await this.accountRepository.findOneOrFail({
      id: family.fundingAccountId,
    });

    if (account.accountType === AccountAccounttypeEnum.Bank) {
      return this.accountBankConnectorRepository.findOne(
        { id: family.fundingAccountId },
        { relations: ['account'] },
      );
    }

    throw new Error(
      'Funding account type not currently supported (credit card)',
    );
  }
}
