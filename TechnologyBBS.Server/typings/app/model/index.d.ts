// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/model/account';
import ExportTopic from '../../../app/model/topic';

declare module 'egg' {
  interface IModel {
    Account: ReturnType<typeof ExportAccount>;
    Topic: ReturnType<typeof ExportTopic>;
  }
}
