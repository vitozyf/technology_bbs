import { Context } from 'egg';

export default {
  sendRes(code: number = 0, data: any = null, msg: string = '') {
    (this as Context).body = { code, data, msg };
  },
};
