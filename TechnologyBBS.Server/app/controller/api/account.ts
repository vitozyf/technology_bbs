import { Controller } from 'egg';

const md5 = require('blueimp-md5');

export default class AccountController extends Controller {
  public async login() {
    const { ctx } = this;

    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async signin() {
    const { ctx } = this;
    const {
      user_name,
      password,
      mobile,
      address,
      age,
      gender,
    } = ctx.request.body;
    const Users = await ctx.service.account.getUserByUserName(user_name);
    if (Users.length > 0) {
      ctx.body = { code: 1, message: '用户已存在' };
      return;
    }
    if (!user_name || !password) {
      ctx.body = { code: 1, message: '用户名或密码不能为空' };
      return;
    }
    await ctx.service.account.addAccount({
      user_name,
      password: md5(password, this.app.config.passwordKey),
      mobile,
      address,
      age,
      gender: gender === '男' ? 1 : gender === '女' ? 0 : null,
    });
    ctx.body = { code: 0 };
  }
}
