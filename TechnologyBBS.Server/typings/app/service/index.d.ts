// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/service/account';
import ExportClocking from '../../../app/service/clocking';
import ExportTopics from '../../../app/service/topics';

declare module 'egg' {
  interface IService {
    account: ExportAccount;
    clocking: ExportClocking;
    topics: ExportTopics;
  }
}
