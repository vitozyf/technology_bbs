import { Service } from 'egg';
import { Account } from '../model/account';
import { getRepository } from 'typeorm';

/**
 * Account Service
 */
export default class AccountService extends Service {
  /**
   * getUserByUserName
   * @param user_name - user_name
   */
  public async getUserByUserName(user_name: string) {
    const AccountDb = getRepository(Account);
    const AccountInfo = await AccountDb.find({
      where: {
        user_name,
      },
    });
    return AccountInfo;
  }
}
