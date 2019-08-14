import { Controller } from 'egg';

const md5 = require('blueimp-md5');

export default class AccountController extends Controller {
  /**
   * 登录
   */
  public async login() {
    const { ctx } = this;
    const { user_name, password } = ctx.request.body;
    if (!user_name || !password) {
      ctx.body = { code: 1, msg: '账号或密码必填' };
      return;
    }

    const Users = await ctx.service.account.getUserByUserName(user_name);

    if (Users.length === 0) {
      ctx.body = { code: 1, msg: '该用户名未注册' };
      return;
    }

    if (Users[0].password !== md5(password, this.app.config.passwordKey)) {
      ctx.body = { code: 1, msg: '密码错误' };
      return;
    }

    ctx.helper.delKey(Users[0], 'password');

    ctx.body = { code: 0, msg: '登录成功', data: Users[0] };
  }

  /**
   * 注册
   */
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
      ctx.body = { code: 1, msg: '用户已存在' };
      return;
    }
    if (!user_name || !password) {
      ctx.body = { code: 1, msg: '用户名或密码不能为空' };
      return;
    }

    const NewUser = await ctx.service.account.addAccount({
      user_name,
      password: md5(password, this.app.config.passwordKey),
      mobile,
      address,
      age,
      gender: gender === '男' ? 1 : gender === '女' ? 0 : null,
    });

    ctx.helper.delKey(NewUser, ['password', 'is_delete']);

    ctx.body = { code: 0, msg: '注册成功', data: NewUser };
  }
}
