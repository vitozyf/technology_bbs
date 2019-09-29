import { Controller } from 'egg';

export default class ClockingController extends Controller {
  async saveClocking() {
    const { ctx } = this;
    const params = ctx.request.body;
    await ctx.service.clocking.saveClocking(params);
    return ctx.success(true, 'success');
  }

  async saveAttendance() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { attendances, continues, leaves, outworkers } = params;

    if (!attendances) {
      return ctx.fail(1, 'attendances参数必填');
    }

    if (!continues) {
      return ctx.fail(1, 'continues参数必填');
    }

    if (!leaves) {
      return ctx.fail(1, 'leaves参数必填');
    }

    if (!outworkers) {
      return ctx.fail(1, 'outworkers参数必填');
    }

    try {
      await ctx.service.clocking.saveAttendance(params);
    } catch (error) {
      return ctx.fail(1, 'fail');
    }
    return ctx.success(true, 'success');
  }
}
