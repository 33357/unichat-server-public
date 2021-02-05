/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:47:55
 * @LastEditors: 33357
 */
'use strict';

const path = require('path');

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
  redis: {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    },
    agent: true,
  },
  io: {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [ 'packet' ],
      },
    },
    redis: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    },
  },
  session: {
    sameSite: 'none',
  },
  cluster: {
    listen: {
      port: 8000,
      hostname: '0.0.0.0', // localhost
    },
    https: {
      key: path.join(__dirname, '../private/ssl/key'),
      cert: path.join(__dirname, '../private/ssl/pem'),
    },
  },
  security: {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ ],
  },
  cors: {
    credentials: true, // 允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};
