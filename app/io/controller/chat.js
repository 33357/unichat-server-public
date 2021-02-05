/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:35:51
 * @LastEditors: 33357
 */
'use strict';

const SocketController = require('../core/socket_controller');

const linkRule = {
  acceptAddress: 'ethAddress',
  skip: 'number',
  limit: 'number',
};

const getRule = {
  acceptAddress: 'ethAddress',
  skip: 'number',
  limit: 'number',
};

const createRule = {
  acceptAddress: 'ethAddress',
  chatContent: 'object',
};

const unlinkRule = {
  acceptAddress: 'ethAddress',
};

class ChatController extends SocketController {
  // 连接消息
  async linkChat() {
    try {
      console.log('linkChat');
      const { service, ctx } = this;
      ctx.validate(linkRule, ctx.sendData);
      const res = await service.chat.linkChat(ctx.sendData);
      res.req = {
        method: 'linkChat',
        data: ctx.sendData,
      };
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      err.method = 'linkChat';
      this.returnRes(err);
    }
  }
  // 获取消息
  async getChat() {
    try {
      console.log('getChat');
      const { service, ctx } = this;
      ctx.validate(getRule, ctx.sendData);
      const res = await service.chat.getChat(ctx.sendData);
      res.req = {
        method: 'getChat',
        data: ctx.sendData,
      };
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      err.method = 'getChat';
      this.returnRes(err);
    }
  }
  // 发送消息
  async sendChat() {
    try {
      const { service, ctx } = this;
      console.log('sendChat');
      ctx.validate(createRule, ctx.sendData);
      const res = await service.chat.sendChat(ctx.sendData);
      res.req = {
        method: 'sendChat',
        data: ctx.sendData,
      };
      this.returnRoomRes(res);
    } catch (err) {
      console.log(err);
      err.method = 'sendChat';
      this.returnRes(err);
    }
  }

  async unlinkChat() {
    try {
      console.log('unlinkChat');
      const { service, ctx } = this;
      ctx.validate(unlinkRule, ctx.sendData);
      const res = await service.chat.unlinkChat(ctx.sendData);
      res.req = {
        method: 'unlinkChat',
        data: ctx.sendData,
      };
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      err.method = 'unlinkChat';
      this.returnRes(err);
    }
  }
}

module.exports = ChatController;
