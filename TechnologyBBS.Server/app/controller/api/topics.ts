import { Controller } from 'egg';

export default class TopicsController extends Controller {
  async getTopics() {
    const { ctx } = this;
    return ctx.success(true);
  }
}
