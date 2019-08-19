import { Context } from 'egg';

/**
 * jwt验证
 */
export default function jwtverify(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    const { app } = ctx;
    const jwtverifyNameExp = new RegExp(app.config.jwtverify.name);
    const authorization = ctx.header.authorization;
    const token = authorization
      ? authorization.splice(jwtverifyNameExp, '')
      : ''; // 获取jwt
    const secret = app.config.jwt.secret;
    try {
      await app.jwt.verify(token, secret); // // 解密，获取payload
    } catch (error) {
      ctx.logger.error(error);
      ctx.status = 401;
      return;
    }
    await next();
  };
}
