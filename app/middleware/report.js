/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:37:17
 * @LastEditors: 33357
 */
'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const startTime = Date.now();
    console.log('getTime:', startTime);
    await next();
    // 上报请求时间
    const sendTime = Date.now();
    console.log('sendTime:', sendTime);
    console.log('useTime:', sendTime - startTime);
  };
};
