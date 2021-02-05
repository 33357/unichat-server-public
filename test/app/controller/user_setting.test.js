/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:48:56
 * @LastEditors: 33357
 */
'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/user_setting.test.js', () => {
  // 测试获取用户设置
  it('should GET /api/v1/user_setting', () => {
    const ctx = app.mockContext({
      session: {
        userAddress: '0x0',
      },
    });
    return app
      .httpRequest()
      .get('/api/v1/user_setting')
      .expect(200)
      .expect(
        JSON.stringify({
          code: 200,
          message: ctx.helper.ErrorCode[200],
          data: {
            userSetting: {
              chatSetting: {
                defaultChat: [],
                deleteChat: [],
                topChat: [],
                muteChat: [],
                chatHistory: [],
              },
            },
          },
        })
      );
  });
  // 测试更新用户设置
  it('should PUT /api/v1/user_setting', () => {
    const ctx = app.mockContext({
      session: {
        userAddress: '0x0',
      },
    });
    return app
      .httpRequest()
      .put('/api/v1/user_setting')
      .send({
        userSetting: {
          chatSetting: {
            defaultChat: [],
            deleteChat: [],
            topChat: [],
            muteChat: [],
            chatHistory: [],
          },
        },
      })
      .expect(200)
      .expect(
        JSON.stringify({
          code: 200,
          message: ctx.helper.ErrorCode[200],
          data: {
            userSetting: {
              chatSetting: {
                defaultChat: [],
                deleteChat: [],
                topChat: [],
                muteChat: [],
                chatHistory: [],
              },
            },
          },
        })
      );
  });
});
