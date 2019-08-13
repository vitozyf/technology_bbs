import { Service } from 'egg';
import { Account } from '../model/account';
import { getRepository } from 'typeorm';

/**
 * Account Service
 */
export default class AccountService extends Service {
  /**
   * 根据用户名查找用户
   * @param user_name - user_name
   */
  public async getUserByUserName(user_name: string) {
    const AccountDb = getRepository(Account);
    const UserInfo = await AccountDb.find({
      where: {
        user_name,
      },
    });
    return UserInfo;
  }

  public async addAccount(userinfo: any) {
    const AccountDb = getRepository(Account);

    const user = new Account();

    const { user_name, password, mobile, address, age, gender } = userinfo;

    user.user_name = user_name;
    user.password = password;
    user.mobile = mobile;
    user.address = address;
    user.age = age;
    user.gender = gender;

    return await AccountDb.save(user);
  }
}
