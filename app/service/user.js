/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:45:16
 * @LastEditors: 33357
 */
'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  //获取登录信息
  async getSignData() {
    console.log('getSignData');
    const { ctx } = this;
    return { code: 200, data: { signData: ctx.helper.Sign.get() } };
  }
  //获取用户地址
  async getUserAddress() {
    console.log('getUserAddress');
    const { ctx } = this;
    if (ctx.session.userAddress === undefined) {
      ctx.session.userAddress = null;
    }
    return { code: 200, data: { userAddress: ctx.session.userAddress } };
  }
  //用户登录
  async setUserAddressBySign({ signMessage, signData }) {
    const { ctx } = this;
    console.log('setUserAddressBySign');
    if (ctx.test) {
      return { code: 200, data: { userAddress: signMessage.loginWallet } };
    }
    const isSign = ctx.helper.Sign.test({ signMessage, signData });
    if (isSign) {
      const res = await ctx.model.User.findOne({
        userAddress: signMessage.loginWallet,
      });
      if (res == null) {
        await this.create({
          userAddress: signMessage.loginWallet,
          loginDate: signMessage.loginDate,
        });
        ctx.session.userAddress = signMessage.loginWallet;
        return { code: 200, data: { userAddress: ctx.session.userAddress } };
      } else if (res.loginDate < new Date(signMessage.loginDate)) {
        await this.updateOne({
          userAddress: signMessage.loginWallet,
          loginDate: signMessage.loginDate,
        });
        ctx.session.userAddress = signMessage.loginWallet;
        return { code: 200, data: { userAddress: ctx.session.userAddress } };
      }
      throw { code: 400 };
    }
    throw { code: 400 };
  }
  //用户注销
  async clearUserAddress() {
    console.log('clearUserAddress');
    const { ctx } = this;
    ctx.session.userAddress = null;
    return { code: 200, data: { userAddress: ctx.session.userAddress } };
  }
  //新建user
  async create({ userAddress, loginDate }) {
    const { ctx } = this;
    const res = await ctx.model.User.create({
      userAddress,
      loginDate,
    });
    return res;
  }
  //更新user
  async updateOne({ userAddress, loginDate }) {
    const { ctx } = this;
    const res = await ctx.model.User.updateOne(
      { userAddress },
      { $set: { loginDate } }
    );
    return res;
  }
}

module.exports = UserService;
