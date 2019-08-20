import { Application } from 'egg';
import { Account } from '../model/account';

const jwt = require('jsonwebtoken');

export default {
  jwt,
  setJwt(User: Account): string {
    const vm = this as Application;
    const userToken = {
      user_name: User.user_name,
      id: User.id,
      is_block: User.is_block,
    };
    const Token = jwt.sign(userToken, vm.config.jwt_secret, {
      expiresIn: vm.config.jwtverify.expiresIn,
    });
    return `${vm.config.jwtverify.name}${Token}`;
  },
};
