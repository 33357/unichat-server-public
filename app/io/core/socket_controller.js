/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:36:23
 * @LastEditors: 33357
 */
'use strict';

const { Controller } = require('egg');
class SocketController extends Controller {
  // 单独返回消息
  returnRes({ req, code, data = null }) {
    console.log('returnRes', req, code, data);
    const body = {
      req,
      code,
      message: this.ctx.helper.ErrorCode[code],
      data,
    };
    this.ctx.socket.emit('res', body);
  }
  // 聊天室返回消息
  returnRoomRes({ req, room, code, data = null }) {
    console.log('returnRoomRes', req, code, data, room);
    const body = {
      req,
      code,
      message: this.ctx.helper.ErrorCode[code],
      data,
    };
    this.ctx.app.io.of('/').to(room).emit('res', body);
  }
}

module.exports = SocketController;
