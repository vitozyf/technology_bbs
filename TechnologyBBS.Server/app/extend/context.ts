import { Context } from 'egg';
const jwt = require('jsonwebtoken');
export default {
  // respose handler
  success(data: any = null, msg: string = '') {
    (this as Context).body = { code: 0, data, msg };
  },
  fail(code: number = 0, msg: string = '') {
    (this as Context).body = { code, msg };
  },

  // 用户状态失效
  sendFailure() {
    (this as Context).status = 401;
    (this as Context).body = { msg: '登录状态过期，请重新登录' };
  },

  // 获取jwt-payload
  getPayload() {
    const vm = this as Context;
    return jwt.decode(vm.getToken(), vm.app.config.jwt_secret); // 解密验证
  },

  // 获取token
  getToken() {
    const vm = this as Context;
    const authorization = vm.header.authorization;
    const token = authorization ? authorization.split(' ')[1] : ''; // 获取jwt
    return token;
  },
};
