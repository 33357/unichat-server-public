<!--
 * @Author: 33357
 * @Date: 2021-02-05 13:01:49
 * @LastEditTime: 2021-02-06 10:20:37
 * @LastEditors: 33357
-->

# unichat-server-public

unichat Server端开源信息

## 目录

- [项目背景](#项目背景)
- [相关项目](#相关项目)
- [项目结构](#项目结构)
- [安装说明](#安装说明)
- [使用说明](#使用说明)
- [额外信息](#额外信息)
- [维护成员](#维护成员)
- [加入贡献](#加入贡献)
- [开源许可](#开源许可)

## 项目背景

想要了解unichat项目背景请访问：[unichat-public](https://github.com/33357/unichat-public)

## 相关项目

想要了解相关项目请访问：[unichat-public](https://github.com/33357/unichat-public)

## 项目结构

unichat-server-public
├── app
│   ├── controller
│   │   ├── data.js
│   │   ├── user.js
│   │   └── user_setting.js
│   ├── core
│   │   └── http_controller.js
│   ├── extend
│   │   ├── helper
│   │   │   ├── error_code.js
│   │   │   ├── session.js
│   │   │   ├── sign.js
│   │   │   └── token_list.js
│   │   └── helper.js
│   ├── io
│   │   ├── controller
│   │   │   └── chat.js
│   │   ├── core
│   │   │   └── socket_controller.js
│   │   └── middleware
│   │       ├── auth.js
│   │       └── packet.js
│   ├── middleware
│   │   ├── error_handler.js
│   │   ├── gzip.js
│   │   ├── report.js
│   │   └── support.js
│   ├── model
│   │   ├── chat.js
│   │   ├── user.js
│   │   └── user_setting.js
│   ├── router
│   │   └── api
│   │       └── v1
│   ├── router.js
│   ├── service
│   │   ├── chat.js
│   │   ├── data.js
│   │   ├── user.js
│   │   └── user_setting.js
│   └── validate
│       └── user.js
├── app.js
├── appveyor.yml
├── config
│   ├── config.default.js
│   ├── config.local.js
│   ├── config.prod.js
│   ├── config.unittest.js
│   └── plugin.js
├── jsconfig.json
├── LICENSE
├── package-lock.json
├── package.json
├── pm2
│   ├── mongo.json
│   ├── redis.conf
│   └── redis.json
├── README.md
└── test
    └── app
        └── controller
            ├── user.test.js
            └── user_setting.test.js

## 安装说明

安装依赖
```
npm install
```

## 使用说明

项目测试：
```
npm run dev
```

项目部署：
```
npm start
npm stop
```

## 额外部分

see [egg docs](https://eggjs.org) for more detail.

## 维护成员

[@33357](https://github.com/33357)。

## 加入贡献

暂不支持加入贡献，但可以发起讨论。

## 开源协议

[MIT](LICENSE) © Richard Littauer