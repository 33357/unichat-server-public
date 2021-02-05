/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:29:58
 * @LastEditors: 33357
 */
'use strict';

const HttpController = require('../core/http_controller');

const createRule = {
  signMessage: {
    type: 'object',
    rule: {
      loginWallet: 'ethAddress',
      loginDate: 'dateTime',
    },
  },
  signData: 'string',
};

class UserController extends HttpController {
  // 获取user
  async index() {
    try {
      console.log('user index');
      const { service } = this;
      const res = await service.user.getUserAddress();
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      this.returnRes({ code: err.code });
    }
  }
  // 获取user登录信息
  async new() {
    try {
      console.log('user new');
      const { service } = this;
      const res = await service.user.getSignData();
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      this.returnRes({ code: err.code });
    }
  }
  // 创建user
  async create() {
    try {
      const { service, ctx } = this;
      console.log('user create');
      ctx.validate(createRule, ctx.postData);
      const res = await service.user.setUserAddressBySign(ctx.postData);
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      this.returnRes({ code: err.code });
    }
  }
  // 注销user
  async destroy() {
    try {
      console.log('user destroy');
      const { service } = this;
      const res = await service.user.clearUserAddress();
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      this.returnRes({ code: err.code });
    }
  }
}

module.exports = UserController;
