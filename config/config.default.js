/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:47:07
 * @LastEditors: 33357
 */
/* eslint valid-jsdoc: "off" */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    keys: appInfo.name + '',
    middleware: ['report', 'gzip', 'support'],
    session: {
      key: 'session',
      maxAge: 30 * 60 * 1000, // 30 分钟
      httpOnly: true,
      encrypt: true,
      renew: true,
    },
  });
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置 gzip 中间件的配置
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  return {
    ...config,
    ...userConfig,
  };
};
