/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:29:17
 * @LastEditors: 33357
 */
'use strict';

const HttpController = require('../core/http_controller');

const updateRule = {
  userSetting: 'object',
};

class UserSettingController extends HttpController {
  // 获取usersetting
  async index() {
    try {
      console.log('userSetting index');
      const { service, ctx } = this;
      if (
        ctx.session.userAddress === null ||
        ctx.session.userAddress === undefined
      ) {
        throw { code: 400 };
      }
      const res = await service.userSetting.getUserSetting();
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      this.returnRes({ code: err.code });
    }
  }
  // 更新usersetting
  async update() {
    try {
      console.log('userSetting update');
      const { service, ctx } = this;
      if (
        ctx.session.userAddress === null ||
        ctx.session.userAddress === undefined
      ) {
        throw { code: 400 };
      }
      ctx.validate(updateRule, ctx.postData);
      const res = await service.userSetting.updateUserSetting(ctx.postData);
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      this.returnRes({ code: err.code });
    }
  }
}

module.exports = UserSettingController;
