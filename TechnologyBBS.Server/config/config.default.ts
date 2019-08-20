import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import AppConfig from '../config';
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565598324709_1528';

  // add your egg config in here
  config.middleware = ['errorHandler', 'jwtverify'];

  config.logger = {
    dir: require('path').join(appInfo.root, 'logs'),
    // outputJSON: true,
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your special config in here
  const bizConfig = {
    typeorm: {
      type: 'mysql',
      ...AppConfig.dev.mysql,
      database: 'technology_bbs_dev',
      entities: [__dirname + '/../app/model/*.ts'],
      synchronize: true,
      logging: ['error'],
    },
    ...AppConfig.dev.secret,
    jwtverify: {
      name: 'BBS ',
      expiresIn: '24h',
      ignoreUrl: ['signin', 'login'], // jwt忽略验证的路由
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
