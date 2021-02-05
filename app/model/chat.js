/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:39:23
 * @LastEditors: 33357
 */
'use strict';

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  //chat数据模式
  const ChatSchema = new Schema({
    sendAddress: {
      type: String,
      required: true,
    },
    acceptAddress: {
      type: String,
      required: true,
    },
    chatContent: {},
    createDate: {
      type: Date,
      default: Date.now,
    },
  });
  return mongoose.model('Chat', ChatSchema);
};
