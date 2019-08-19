import { Controller } from 'egg';

const md5 = require('blueimp-md5');

export default class AccountController extends Controller {
  /**
   * 登录
   */
  public async login() {
    const { ctx, app } = this;
    const { user_name, password } = ctx.request.body;
    if (!user_name || !password) {
      return ctx.sendRes(1, null, '账号或密码必填');
    }

    const Users = await ctx.service.account.getUserByUserName(user_name);

    if (!Users) {
      return ctx.sendRes(1, null, '该用户名未注册');
    }

    if (Users.password !== md5(password, app.config.passwordKey)) {
      return ctx.sendRes(1, null, '密码错误');
    }

    ctx.helper.delKey(Users, 'password');

    return ctx.sendRes(0, { Users, Token: app.setJwt(user_name) }, '登录成功');
  }

  /**
   * 注册
   */
  public async signin() {
    const { ctx, app } = this;
    const { user_name, password, mobile, location, gender } = ctx.request.body;
    const Users = await ctx.service.account.getUserByUserName(user_name);

    if (Users) {
      return ctx.sendRes(1, null, '用户已存在');
    }
    if (!user_name || !password) {
      return ctx.sendRes(1, null, '用户名或密码不能为空');
    }

    const NewUser = await ctx.service.account.addAccount({
      user_name,
      password: md5(password, app.config.passwordKey),
      mobile,
      location,
      gender,
    });

    ctx.helper.delKey(NewUser, ['password', 'is_delete']);

    return ctx.sendRes(0, NewUser, '注册成功');
  }

  /**
   * 修改密码
   */
  public async changePwd() {
    const { ctx } = this;
    const { password, new_password } = ctx.request.body;
    if (!password || !new_password) {
      return ctx.sendRes(1, null, '旧密码或新密码不能为空');
    }
  }
}
