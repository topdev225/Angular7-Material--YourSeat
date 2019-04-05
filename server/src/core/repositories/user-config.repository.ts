import { Repository, EntityRepository } from "typeorm";
import { UserConfig } from "core/model/entities/user-config.entity";

@EntityRepository(UserConfig)
export class UserConfigRepository extends Repository<UserConfig> {
  async setUserConfig(userId: string, key: string, value: string): Promise<UserConfig> {
    let userConfig = await this.findOne({ userId, key });

    if (!userConfig) {
      userConfig = this.create({ userId, key, value });
    } else {
      userConfig.value = value;
    }

    await this.save(userConfig);
    return userConfig;
  }
}