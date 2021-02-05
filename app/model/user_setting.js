/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:38:57
 * @LastEditors: 33357
 */
'use strict';

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  //usersetting数据模式
  const UserSettingSchema = new Schema({
    userAddress: {
      type: String,
      required: true,
    },
    userSetting: {
      homeSetting: {
        chatSetting: {
          type: Schema.Types.Mixed,
          default: {},
        },
      },
      appSetting: {
        numDigits: {
          type: Number,
          default: 10,
        },
        userTokenJson: {
          type: Schema.Types.Mixed,
          default: {},
        },
      },
    },
    createDate: {
      type: Date,
      default: Date.now,
    },
  });
  return mongoose.model('UserSetting', UserSettingSchema);
};
