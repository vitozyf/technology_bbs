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
      const UserToken = ctx.getToken();
      const UserAuth = ctx.getPayload();
      if (!UserAuth) {
        return ctx.sendFailure();
      }
      await app.redis.selectAsync(app.config.redis.userDb);
      const UserInfo = await app.redis.getAsync(UserAuth.id);
      try {
        if (
          !UserInfo ||
          Date.parse(UserInfo.expires_in) - Date.now() < 0 ||
          UserInfo.Token !== UserToken
        ) {
          return ctx.sendFailure();
        }
      } catch (error) {
        ctx.logger.error(error);
      }
      // jwt验证
      await jwt.verify(UserToken, app.config.jwt_secret); // 解密验证
    }

    await next();
  };
}
