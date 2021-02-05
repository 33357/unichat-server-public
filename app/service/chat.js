/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:42:25
 * @LastEditors: 33357
 */
'use strict';

const Service = require('egg').Service;

class ChatService extends Service {
  //连接消息
  async linkChat({ acceptAddress, skip, limit }) {
    const { ctx } = this;
    ctx.socket.join(acceptAddress);
    const res = await this.find({ acceptAddress, skip, limit });
    return { code: 200, data: { chats: res } };
  }
  //断开消息
  async unlinkChat({ acceptAddress }) {
    const { ctx } = this;
    ctx.socket.leave(acceptAddress);
    return { code: 200, data: { unlink: true } };
  }
  //发送消息
  async sendChat({ acceptAddress, chatContent }) {
    const { ctx } = this;
    const res = await this.create({
      sendAddress: ctx.session.userAddress,
      acceptAddress,
      chatContent,
    });
    return { code: 200, data: { chats: [res] }, room: res.acceptAddress };
  }
  //获取消息
  async getChat({ acceptAddress, skip, limit }) {
    const res = await this.find({
      acceptAddress,
      skip,
      limit,
    });
    return { code: 200, data: { chats: res }, room: res.acceptAddress };
  }
  //新建chat
  async create({ sendAddress, acceptAddress, chatContent }) {
    console.log('create');
    const { ctx } = this;
    const createData = {
      sendAddress,
      acceptAddress,
      chatContent,
    };
    const res = await ctx.model.Chat.create(createData);
    return res;
  }
  //查询chat
  async find({ sendAddress = null, acceptAddress, skip, limit }) {
    const { ctx } = this;
    const findData = { acceptAddress };
    if (sendAddress !== null) {
      findData.sendAddress = sendAddress;
    }
    const res = await ctx.model.Chat.find(findData)
      .sort({ createDate: -1 })
      .skip(skip)
      .limit(limit);
    return res.reverse();
  }
}

module.exports = ChatService;
