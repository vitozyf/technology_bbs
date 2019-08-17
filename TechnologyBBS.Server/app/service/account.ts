import { Service } from 'egg';
import { Account } from '../model/account';
import { getRepository } from 'typeorm';

/**
 * Account Service
 */
export default class AccountService extends Service {
  /**
   * 根据用户名查找用户
   * @param user_name - 用户名
   */
  public async getUserByUserName(user_name: string) {
    const AccountDb = getRepository(Account);
    const UserInfo = await AccountDb.findOne({
      user_name,
    });
    return UserInfo;
  }

  /**
   * 新增用户
   * @param userinfo - 用户注册信息
   */
  public async addAccount(userinfo: any) {
    const AccountDb = getRepository(Account);

    const user = new Account();

    Object.assign(user, userinfo);

    // return await AccountDb.save(user);
    await AccountDb.insert(user);

    return user;
  }
}
