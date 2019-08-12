import { Application } from 'egg';
import RouterApi from './router/api';
export default (app: Application) => {
  RouterApi(app);
};
