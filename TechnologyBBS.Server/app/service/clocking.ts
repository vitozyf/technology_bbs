import { Service } from 'egg';
import { Clocking } from '../model/clocking';
import { getRepository } from 'typeorm';

export default class ClockingService extends Service {
  async saveClocking(params: any) {
    const ClockingTable = getRepository(Clocking);

    const ClockingData = new Clocking();

    Object.assign(ClockingData, params);

    await ClockingTable.insert(ClockingData);
  }
}
