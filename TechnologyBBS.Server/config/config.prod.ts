import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import AppConfig from '../config';
export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};
  config.logger = {
    dir: require('path').join(appInfo.root, 'logs'),
  };

  config.security = {
    csrf: {
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
    },
    domainWhiteList: ['http://vitock.cn'],
  };

  const bizConfig = {
    typeorm: {
      type: 'mysql',
      ...AppConfig.pro.mysql,
      database: 'technology_bbs_pro',
      entities: [__dirname + '/../app/model/*.js'],
      synchronize: false,
      logging: 'all',
    },
    redis: {
      ...AppConfig.pro.redis,
    },
    ...AppConfig.pro,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
