import { Context } from 'egg';
const jwt = require('jsonwebtoken');
/**
 * jwt验证
 */
export default function jwtverify(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    const { app } = ctx;
    const IgnoreUrl = app.config.jwtverify.ignoreUrl.find(url => {
      return new RegExp(url).test(ctx.url);
    });
    if (!IgnoreUrl) {
      // redis验证
      const UserAuth = ctx.getPayload();
      app.redis.select(app.config.redis.userDb);
      const RedisUserInfo = await app.redis.getAsync(UserAuth.id);
      try {
        const UserInfo = JSON.parse(RedisUserInfo);
        if (!UserInfo || Date.parse(UserInfo.expires_in) - Date.now() < 0) {
          ctx.status = 401;
          ctx.body = { msg: '登录状态过期，请重新登录' };
          return;
        }
      } catch (error) {
        ctx.logger.error(error);
      }
      // jwt验证
      const authorization = ctx.header.authorization;
      const token = authorization ? authorization.split(' ')[1] : ''; // 获取jwt
      const secret = app.config.jwt_secret;
      await jwt.verify(token, secret); // 解密验证
    }
    await next();
  };
}
