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

    if (Users.password !== md5(password, app.config.password_key)) {
      return ctx.sendRes(1, null, '密码错误');
    }

    ctx.helper.delKey(Users, 'password');

    return ctx.sendRes(0, { Users, Token: app.setJwt(Users) }, '登录成功');
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
      password: md5(password, app.config.password_key),
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
    const { user_name, password, new_password } = ctx.request.body;
    const md5password = md5(password, ctx.app.config.password_key);
    const md5newpassword = md5(new_password, ctx.app.config.password_key);
    if (!user_name) {
      return ctx.sendRes(1, null, '用户名不能为空');
    }
    if (!password || !new_password) {
      return ctx.sendRes(1, null, '旧密码或新密码不能为空');
    }
    const User = await ctx.service.account.getUserByUserName(user_name);
    if (!User) {
      return ctx.sendRes(1, null, '没有找到用户名');
    }
    if (User.password !== md5password) {
      return ctx.sendRes(1, null, '用户旧密码错误');
    }
    if (md5password === md5newpassword) {
      return ctx.sendRes(1, null, '新旧密码重复');
    }
    User.password = md5newpassword;
    ctx.service.account.updateAccount(User);
    return ctx.sendRes(0, null, '密码修改成功');
  }
}
