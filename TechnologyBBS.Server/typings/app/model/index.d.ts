// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/model/account';
import ExportClocking from '../../../app/model/clocking';
import ExportTopic from '../../../app/model/topic';

declare module 'egg' {
  interface IModel {
    Account: ReturnType<typeof ExportAccount>;
    Clocking: ReturnType<typeof ExportClocking>;
    Topic: ReturnType<typeof ExportTopic>;
  }
}
