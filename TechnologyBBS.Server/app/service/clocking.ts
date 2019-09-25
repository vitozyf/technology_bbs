import { Service } from 'egg';
import { Clocking } from '../model/clocking';
import { getRepository } from 'typeorm';

export default class ClockingService extends Service {
  async saveClocking(params: any[]) {
    const ClockingTable = getRepository(Clocking);

    const clockingArray: Clocking[] = [];

    params.forEach(item => {
      const ClockingData = new Clocking();
      clockingArray.push(Object.assign(ClockingData, item));
    });

    await ClockingTable.insert(clockingArray);
  }
}
