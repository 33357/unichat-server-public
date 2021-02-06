<!--
 * @Author: 33357
 * @Date: 2021-02-05 13:01:49
 * @LastEditTime: 2021-02-06 10:59:14
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
├── app                                             //app
│   ├── controller                                  //控制器
│   │   ├── data.js                                 //data请求
│   │   ├── user.js                                 //user请求
│   │   └── user_setting.js                         //userSetting请求
│   ├── core                                        //基类
│   │   └── http_controller.js                      //httpController基类
│   ├── extend                                      //扩展
│   │   ├── helper                                  //辅助扩展
│   │   │   ├── error_code.js                       //错误代码
│   │   │   ├── session.js                          //session映射redis
│   │   │   ├── sign.js                             //eth签名处理
│   │   │   └── token_list.js                       //token列表
│   │   └── helper.js                               //辅助入口
│   ├── io                                          //socket
│   │   ├── controller                              //控制
│   │   │   └── chat.js                             //chat控制
│   │   ├── core                                    //基类
│   │   │   └── socket_controller.js                //socketController基类
│   │   └── middleware                              //socket中间件
│   │       ├── auth.js                             //认证处理
│   │       └── packet.js                           //包处理
│   ├── middleware                                  //中间件
│   │   ├── error_handler.js                        //错误捕获
│   │   ├── gzip.js                                 //gzip压缩
│   │   ├── report.js                               //时间汇报
│   │   └── support.js                              //预处理
│   ├── model                                       //数据库模型
│   │   ├── chat.js                                 //chat模型
│   │   ├── user.js                                 //user模型
│   │   └── user_setting.js                         //usersetting模型
│   ├── router                                      //路由器
│   │   └── api                                     //api
│   │       └── v1                                  //v1
│   │           ├── data.js                         //data请求
│   │           ├── io.js                           //socket请求
│   │           ├── user_setting.js                 //userSetting请求
│   │           └── user.js                         //user请求
│   ├── router.js                                   //路由入口
│   ├── service                                     //服务器
│   │   ├── chat.js                                 //chat服务
│   │   ├── data.js                                 //data服务
│   │   ├── user.js                                 //user服务
│   │   └── user_setting.js                         //userSetting服务
│   └── validate                                    //规则验证文件
│       └── user.js                                 //user
├── app.js                                          //app入口文件
├── appveyor.yml
├── config                                          //配置文件
│   ├── config.default.js                           //默认配置文件
│   ├── config.local.js                             //本地配置文件
│   ├── config.prod.js                              //部署配置文件
│   ├── config.unittest.js                          //单元测试配置文件
│   └── plugin.js                                   //插件
├── jsconfig.json
├── LICENSE                                         //开源协议
├── package-lock.json
├── package.json
├── pm2                                             //pm2运行JSON
│   ├── mongo.json                                  //mongodb运行JSON
│   ├── redis.conf                                  //redis配置文件
│   └── redis.json                                  //redis运行JSON
├── README.md                                       //说明文档
└── test                                            //单元测试
    └── app
        └── controller
            ├── user.test.js                        //user测试
            └── user_setting.test.js                //userSetting测试

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