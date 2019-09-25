import { Controller } from 'egg';

export default class ClockingController extends Controller {
  async saveClocking() {
    const { ctx } = this;
    const params = ctx.request.body;
    await ctx.service.clocking.saveClocking(params);
    return ctx.success(true, '保存成功');
  }
}
