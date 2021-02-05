/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:37:33
 * @LastEditors: 33357
 */
'use strict';

module.exports = () => {
  return async (ctx, next) => {
    ctx.postData = {};
    if (ctx.request.body !== undefined) {
      ctx.postData = ctx.request.body;
    }
    ctx.getData = ctx.query;
    // 打印时间
    console.log('getData', ctx.getData);
    console.log('postData', ctx.postData);
    await next();
  };
};
