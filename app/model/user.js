/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:38:49
 * @LastEditors: 33357
 */
'use strict';

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  //user数据模式
  const UserSchema = new Schema({
    userAddress: {
      type: String,
      required: true,
    },
    loginDate: {
      type: Date,
      required: true,
    },
    createDate: {
      type: Date,
      default: Date.now,
    },
  });
  return mongoose.model('User', UserSchema);
};
