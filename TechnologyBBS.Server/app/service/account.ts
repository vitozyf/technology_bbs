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
    const AccountTable = getRepository(Account);
    const UserInfo = await AccountTable.findOne({
      user_name,
    });
    return UserInfo;
  }

  /**
   * 新增用户
   * @param userinfo - 用户注册信息
   */
  public async addAccount(userinfo: any) {
    const AccountTable = getRepository(Account);

    const user = new Account();

    Object.assign(user, userinfo);

    // return await AccountTable.save(user);
    await AccountTable.insert(user);

    return user;
  }

  /**
   * 更新用户信息
   * @param userinfo 用户信息
   */
  public async updateAccount(userinfo: Account) {
    const AccountTable = getRepository(Account);

    return await AccountTable.save(userinfo);
  }
}
