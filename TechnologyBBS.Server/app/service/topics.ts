import { Service } from 'egg';
import { Topic } from '../model/topic';
import { getRepository } from 'typeorm';

interface ITopicQueryParams {
  tab?: string;
}

export default class TopicService extends Service {
  async getTopics({ PageIndex = 1, PageSize = 20, tab = '' }) {
    const WhereParams: ITopicQueryParams = {};
    if (tab) {
      WhereParams.tab = tab;
    }
    const TopicTable = getRepository(Topic);
    const tpoics = TopicTable.find({
      skip: (PageIndex - 1) * PageSize,
      take: PageSize,
      order: {
        update_at: 'DESC',
      },
      where: {
        ...WhereParams,
      },
    });
    return tpoics;
  }
}
