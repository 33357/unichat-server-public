/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:36:50
 * @LastEditors: 33357
 */
'use strict';

module.exports = () => {
  return async (ctx, next) => {
    ctx.sendData = ctx.packet[1];
    console.log('sendData:', ctx.sendData);
    await next();
  };
};
