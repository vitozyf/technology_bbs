import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

const CsrfIgnoreUrl = ['signin', 'login'];

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565598324709_1528';

  // add your egg config in here
  config.middleware = [];

  config.logger = {
    dir: require('path').join(appInfo.root, 'logs'),
    // outputJSON: true,
  };

  config.security = {
    csrf: {
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      ignore: ctx => {
        if (CsrfIgnoreUrl.find(url => new RegExp(url).test(ctx.url))) {
          return true;
        }
        return false;
      },
    },
  };

  // add your special config in here
  const bizConfig = {
    typeorm: {
      type: 'mysql',
      host: '47.98.240.182',
      port: 3306,
      username: 'root',
      password: 'zyf535069215',
      database: 'technology_bbs_dev',
      entities: [__dirname + '/../app/model/*.ts'],
      synchronize: true,
      logging: ['error'],
    },
    passwordKey: '~+!_@)#($*%&^pkujdhtnmbz++__&^%./<?',
    jwt: {
      secret: 'zufyaehjksbnak',
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
