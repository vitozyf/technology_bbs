import { Application } from 'egg';
import { Account } from '../model/account';

const jwt = require('jsonwebtoken');

export default {
  jwt,
  setJwt(User: Account): string {
    const vm = this as Application;
    const userToken = {
      id: User.id,
    };
    const Token = jwt.sign(userToken, vm.config.jwt_secret, {
      expiresIn: vm.config.jwtverify.expiresIn,
    });
    return `${vm.config.jwtverify.name} ${Token}`;
  },
};
