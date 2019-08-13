import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async login() {
    const { ctx } = this;

    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async signin() {
    const { ctx } = this;
    const { user_name, password } = ctx.request.body;
    const Users = await ctx.service.account.getUserByUserName(user_name);
    console.log(user_name, password);
    if (Users.length > 0) {
      ctx.body = { Code: 1, Message: '用户已存在' };
      return;
    }
    ctx.body = { Code: 0 };
  }
}
