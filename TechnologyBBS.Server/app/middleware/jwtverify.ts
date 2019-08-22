import { Context } from 'egg';

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
      const authorization = ctx.header.authorization;
      const token = authorization
        ? authorization.replace(new RegExp(`${app.config.jwtverify.name} `), '')
        : ''; // 获取jwt
      const secret = app.config.jwt_secret;
      await app.jwt.verify(token, secret); // 解密验证
    }
    await next();
  };
}
