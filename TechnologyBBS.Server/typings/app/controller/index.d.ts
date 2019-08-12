// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiAccount from '../../../app/controller/api/account';

declare module 'egg' {
  interface IController {
    api: {
      account: ExportApiAccount;
    }
  }
}
