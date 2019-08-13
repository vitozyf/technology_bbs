import { Controller } from 'egg';
import { Account } from '../../model/account';
import { getConnection } from 'typeorm';

export default class HomeController extends Controller {
  public async login() {
    const { ctx } = this;

    const account = new Account();
    account.age = 18;
    account.address = 'ccc';
    account.user_name = 'vito3';
    account.gender = 0;
    account.tags = ['a', 'b'];
    const db = getConnection();
    db.manager.save(account).then(account => {
      console.log('account has been saved. Photo id is', account.id);
    });

    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
