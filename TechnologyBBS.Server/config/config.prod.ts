import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};
  config.logger = {
    dir: require('path').join(appInfo.root, 'logs'),
  };

  const bizConfig = {
    typeorm: {
      type: 'mysql',
      host: '47.98.240.182',
      port: 3306,
      username: 'root',
      password: 'zyf535069215',
      database: 'technology_bbs_pro',
      entities: [__dirname + '/../app/model/*.js'],
      synchronize: false,
      logging: 'all',
    },
    passwordKey: '~+!_@)#($*%&^pkujdhtnmbz++__&^%./<?',
    jwt: {
      secret: 'ajhdk**#&%^&#*!^@%*HD(&#^',
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
