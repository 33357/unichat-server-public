/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:40:30
 * @LastEditors: 33357
 */
'use strict';

module.exports = (app) => {
  const { io } = app;
  //发送消息
  io.route('sendChat', app.io.controller.chat.sendChat);
  //连接消息
  io.route('linkChat', app.io.controller.chat.linkChat);
  //断开消息
  io.route('unlinkChat', app.io.controller.chat.unlinkChat);
  //获取消息
  io.route('getChat', app.io.controller.chat.getChat);
};
