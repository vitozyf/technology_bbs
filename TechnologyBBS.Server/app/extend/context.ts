import { Context } from 'egg';

export default {
  isAjax(this: Context) {
    return this.get('X-Requested-With') === 'XMLHttpRequest';
  },

  sendRes(code: number = 0, data: any = null, msg: string = '') {
    (this as Context).body = { code, data, msg };
  },
};
