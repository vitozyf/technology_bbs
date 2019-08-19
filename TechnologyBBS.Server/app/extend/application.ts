import { Application } from 'egg';

export default {
  setJwt(user_name: string): string {
    const vm = this as Application;
    const userToken = {
      name: user_name,
    };
    const Token = vm.jwt.sign(userToken, vm.config.jwt.secret, {
      expiresIn: vm.config.jwtverify.expiresIn,
    });
    return `${vm.config.jwtverify.name}${Token}`;
  },
};
