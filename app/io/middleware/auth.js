/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:36:34
 * @LastEditors: 33357
 */
'use strict';

module.exports = () => {
  return async (ctx, next) => {
    // 权限校验通过
    ctx.session = JSON.parse(
      await ctx.app.redis.get(
        ctx.cookies.get(ctx.app.config.session.key, ctx.sessionOptions)
      )
    );
    if (
      ctx.session.userAddress === undefined ||
      ctx.session.userAddress === null
    ) {
      console.log('断开');
      ctx.app.io.of('/').adapter.remoteDisconnect(ctx.socket.id, true, err => {
        console.error(err);
      });
    }
    // 放行
    await next();
    console.log('断开连接');
  };
};
