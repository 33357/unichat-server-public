/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:44:06
 * @LastEditors: 33357
 */
'use strict';

const Service = require('egg').Service;

class UserSettingService extends Service {
  //获取设置
  async getUserSetting() {
    console.log('getUserSetting');
    const { ctx } = this;
    const res = await this.findOne({
      userAddress: ctx.session.userAddress,
    });
    if (res === null) {
      const res = await this.create();
      return { code: 200, data: { userSetting: res.userSetting } };
    }
    ctx.session.userSetting = res.userSetting;
    return { code: 200, data: { userSetting: res.userSetting } };
  }
  //更新设置
  async updateUserSetting({ userSetting }) {
    console.log('updateUserSetting');
    const { ctx } = this;
    const res = await this.findOneAndUpdate({
      userAddress: ctx.session.userAddress,
      userSetting,
    });
    return { code: 200, data: { userSetting: res.userSetting } };
  }
  //查询usersetting
  async findOne({ userAddress }) {
    const { ctx } = this;
    const res = await ctx.model.UserSetting.findOne({
      userAddress,
    });
    return res;
  }
  //新建usersetting
  async create() {
    console.log('createUserSetting');
    const { ctx } = this;
    const createData = {
      userAddress: ctx.session.userAddress,
    };
    const res = await ctx.model.UserSetting.create(createData);
    return res;
  }
  //更新usersetting
  async findOneAndUpdate({ userAddress, userSetting }) {
    const { ctx } = this;
    const res = await ctx.model.UserSetting.findOneAndUpdate(
      { userAddress },
      {
        $set: { userSetting },
      },
      { new: true }
    );
    return res;
  }
}

module.exports = UserSettingService;
