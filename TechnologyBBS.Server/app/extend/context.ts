import { Context } from 'egg';
const jwt = require('jsonwebtoken');
export default {
  sendRes(code: number = 0, data: any = null, msg: string = '') {
    (this as Context).body = { code, data, msg };
  },
  // 获取jwt-payload
  getPayload() {
    const vm = this as Context;
    const app = vm.app;
    const authorization = vm.header.authorization;
    const token = authorization ? authorization.split(' ')[1] : ''; // 获取jwt
    const secret = app.config.jwt_secret;
    return jwt.decode(token, secret); // 解密验证
  },
};
