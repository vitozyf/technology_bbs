import { Service } from 'egg';
import { Clocking } from '../model/clocking';
import { Attendance } from '../model/attendance';
import { Continue } from '../model/continue';
import { Leave } from '../model/leave';
import { Outworker } from '../model/outworker';
import { getRepository } from 'typeorm';

interface ICockingParam {
  attendances: Attendance[];
  continues: string;
  leaves: Leave[];
  outworkers: Outworker[];
}

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

  async saveAttendance(params: ICockingParam) {
    const AttendanceTable = getRepository('Attendance');
    const ContinueTable = getRepository('Continue');
    const LeaveTable = getRepository('Leave');
    const OutworkerTable = getRepository('Outworker');
    const { attendances, continues, leaves, outworkers } = params;

    const AllDatas: Attendance[] = (await AttendanceTable.find()) as Attendance[];
    const AttendanceArray: Attendance[] = [];
    attendances.forEach(item => {
      const attendanceData: Attendance = new Attendance();
      const existing: Attendance =
        AllDatas.find(d => d.name === item.name) || attendanceData;
      AttendanceArray.push(Object.assign(existing, item));
    });
    await AttendanceTable.save(AttendanceArray);

    const continueData: Continue = new Continue();
    continueData.names = continues;
    await ContinueTable.save(continueData);

    const LeaveParams: Leave[] = [];
    leaves.forEach(item => {
      const LeaveData: Leave = new Leave();
      LeaveParams.push(Object.assign(LeaveData, item));
    });
    await LeaveTable.save(LeaveParams);

    const OutworkerParams: Outworker[] = [];
    outworkers.forEach(item => {
      const OutworkerData: Outworker = new Outworker();
      OutworkerParams.push(Object.assign(OutworkerData, item));
    });
    await OutworkerTable.save(OutworkerParams);
  }
}
