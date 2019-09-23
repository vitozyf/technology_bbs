import { Controller } from 'egg';

export default class TopicsController extends Controller {
  async getTopics() {
    const { ctx } = this;
    const { PageIndex, PageSize } = ctx.request.body;
    if (isNaN(PageIndex) || isNaN(PageSize)) {
      return ctx.fail(1, '参数错误');
    }
    const topics = await ctx.service.topics.getTopics({ PageIndex, PageSize });
    return ctx.success(topics);
  }
}
