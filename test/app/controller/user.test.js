/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:49:31
 * @LastEditors: 33357
 */
'use strict';

const { app } = require('egg-mock/bootstrap');
const moment = require('moment');

describe('test/app/controller/user.test.js', () => {
  // 测试获取用户
  it('should GET /api/v1/user', () => {
    const ctx = app.mockContext({
      session: {
        userAddress: '0x0',
      },
    });
    return app
      .httpRequest()
      .get('/api/v1/user')
      .expect(200)
      .expect(
        JSON.stringify({
          code: 200,
          message: ctx.helper.ErrorCode[200],
          data: { userAddress: '0x0' },
        })
      );
  });
  // 测试获取用户登录信息
  it('should GET /api/v1/user/new', () => {
    const ctx = app.mockContext();
    return app
      .httpRequest()
      .get('/api/v1/user/new')
      .expect(200)
      .expect(
        JSON.stringify({
          code: 200,
          message: ctx.helper.ErrorCode[200],
          data: { signData: ctx.helper.Sign.get() },
        })
      );
  });
  // 测试用户登录
  it('should POST /api/v1/user/', () => {
    const ctx = app.mockContext({
      test: true,
    });
    return app
      .httpRequest()
      .post('/api/v1/user')
      .send({
        signMessage: {
          loginWallet: '0x0',
          loginDate: moment().format('YYYY-MM-DD HH:mm:ss'),
        },
        signData:
          '0x0',
      })
      .expect(200)
      .expect(
        JSON.stringify({
          code: 200,
          message: ctx.helper.ErrorCode[200],
          data: { userAddress: '0x0' },
        })
      );
  });
  // 测试用户注销
  it('should DELETE /api/v1/user', () => {
    const ctx = app.mockContext({
      session: {
        userAddress: '0x0',
      },
    });
    return app
      .httpRequest()
      .delete('/api/v1/user')
      .expect(200)
      .expect(
        JSON.stringify({
          code: 200,
          message: ctx.helper.ErrorCode[200],
          data: { userAddress: null },
        })
      );
  });
});
