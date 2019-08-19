import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Application } from 'egg';

/**
 * handle database configuration
 * @param config typeorm-config
 */
function handleConfig(config: any) {
  const common_config = { logger: 'file', charset: 'utf8mb4' };
  return Object.assign({}, config, common_config);
}

/**
 * database connection
 * @param app Application
 */
async function connectDB(app: Application) {
  const ConnectionOptions = handleConfig(app.config.typeorm);
  await createConnection(ConnectionOptions);
}

class App {
  app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  configWillLoad() {
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用
  }

  async didLoad() {
    // 所有的配置已经加载完毕
    // 可以用来加载应用自定义的文件，启动自定义的服务
    try {
      await connectDB(this.app);
      this.app.logger.info('[typeorm]', '数据链接成功');
    } catch (error) {
      this.app.logger.error('[typeorm]', '数据库链接失败');
      this.app.logger.error(error);
    }
  }

  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
  }

  async didReady() {
    // 应用已经启动完毕
  }

  async serverDidReady() {
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例
  }
}

export default App;
