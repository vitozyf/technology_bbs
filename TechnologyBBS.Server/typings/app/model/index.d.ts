// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/model/account';
import ExportAttendance from '../../../app/model/attendance';
import ExportClocking from '../../../app/model/clocking';
import ExportContinue from '../../../app/model/continue';
import ExportLeave from '../../../app/model/leave';
import ExportOutworker from '../../../app/model/outworker';
import ExportTopic from '../../../app/model/topic';

declare module 'egg' {
  interface IModel {
    Account: ReturnType<typeof ExportAccount>;
    Attendance: ReturnType<typeof ExportAttendance>;
    Clocking: ReturnType<typeof ExportClocking>;
    Continue: ReturnType<typeof ExportContinue>;
    Leave: ReturnType<typeof ExportLeave>;
    Outworker: ReturnType<typeof ExportOutworker>;
    Topic: ReturnType<typeof ExportTopic>;
  }
}
