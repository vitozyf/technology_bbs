import { Subscription } from 'egg';
// import { getRepository } from 'typeorm';
// import { Topic } from '../model/topic';
class UpdateTopics extends Subscription {
  static get schedule() {
    return {
      interval: '30h',
      type: 'all',
    };
  }

  async subscribe() {
    console.log(123);
    // const TopicTable = getRepository(Topic);
    // const res = await this.ctx.curl(
    //   'https://cnodejs.org/api/v1/topics?page=1&limit=20&mdrender=false',
    //   {
    //     dataType: 'json',
    //   }
    // );
    // if (res.data.success) {
    //   const topics: Topic[] = [];
    //   res.data.data.forEach((item: Topic) => {
    //     const topic = new Topic();
    //     topic.title = item.title;
    //     topic.content = item.content;
    //     topic.top = item.top;
    //     topic.good = item.good;
    //     topic.lock = item.lock || false;
    //     topic.reply_count = item.reply_count;
    //     topic.visit_count = item.visit_count;
    //     topic.collect_count = item.collect_count || 0;
    //     topic.last_reply = item.last_reply;
    //     topic.last_reply_at = item.last_reply_at;
    //     topic.content_is_html = false;
    //     topic.tab = item.tab;
    //     topic.deleted = false;
    //     topics.push(topic);
    //   });
    //   TopicTable.save(topics);
    // }
  }
}

export default UpdateTopics;
