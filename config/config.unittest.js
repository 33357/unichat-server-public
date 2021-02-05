/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:48:05
 * @LastEditors: 33357
 */
'use strict';

module.exports = {
  mongoose: {
    client: {
      url:
        '', // 你的数据库地址，egg_article是你数据库得名字
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  },
  security: {
    csrf: {
      enable: false,
    },
  },
};
