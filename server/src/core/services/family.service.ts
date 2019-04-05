import { Inject, Injectable } from '@nestjs/common';
import { AccountAccounttypeEnum } from 'core/model/__generated/graphql.schema';
import { AccountInternal } from 'core/model/entities/account-internal.entity';
import { Account } from 'core/model/entities/account.entity';
import { Family } from 'core/model/entities/family.entity';
import { User } from 'core/model/entities/user.entity';
import { DB_CONNECTION_TOKEN } from 'core/typeorm/constants';
import { CoreproApiService } from 'shared/corepro/services/corepro-api.service';
import { Connection, Repository } from 'typeorm';
import { AccountBankConnector } from 'core/model/entities/account-bank-connector.entity';
import { ExternalAccountType } from 'shared/corepro/model/external-account-type.enum';

@Injectable()
export class FamilyService {
  private userRepository: Repository<User>;
  private familyRepository: Repository<Family>;
  private accountRepository: Repository<Account>;
  private accountInternalRepository: Repository<AccountInternal>;
  private accountBankConnectorRepository: Repository<AccountBankConnector>;

  constructor(
    private coreproService: CoreproApiService,
    @Inject(DB_CONNECTION_TOKEN) private connection: Connection
  ) {
    this.userRepository = this.connection.getRepository(User);
    this.familyRepository = this.connection.getRepository(Family);
    this.accountRepository = this.connection.getRepository(Account);
    this.accountInternalRepository = this.connection.getRepository(
      AccountInternal
    );
    this.accountBankConnectorRepository = this.connection.getRepository(AccountBankConnector);
  }

  async createForUser(userId: string): Promise<Family> {
    const user = await this.userRepository.findOneOrFail({ id: userId });

    const customerId = await this.coreproService.createCustomer({
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.email
    });    

    user.coreproCustomerId = customerId;
    await this.userRepository.save(user);

    const internalAccount = await this.createInternalAccount(userId, customerId);

    const family = this.familyRepository.create({
      name: `${user.firstName}'s family`,
      ownerId: user.id,
      internalAccountId: internalAccount.id,
      payDayOfWeek: 5
    });

    await this.familyRepository.save(family);

    return family;
  }

  private async createInternalAccount(
    userId: string,
    coreproCustomerId: string
  ): Promise<AccountInternal> {
    const coreproAccountId = await this.coreproService.createAccount(
      coreproCustomerId,
      'Family internal'
    );

    const account = this.accountRepository.create({
      accountType: AccountAccounttypeEnum.Internal,
      name: 'Family internal',
      userId
    });

    await this.accountRepository.save(account);

    const internalAccount = this.accountInternalRepository.create({
      id: account.id,
      userId,
      coreproAccountId
    });

    await this.accountInternalRepository.save(internalAccount);

    return internalAccount;
  }  
}
