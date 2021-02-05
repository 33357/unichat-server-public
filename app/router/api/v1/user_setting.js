/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:40:49
 * @LastEditors: 33357
 */
'use strict';

module.exports = (app) => {
  const { router, controller } = app;
  //获取设置
  router.get('/user_setting', controller.userSetting.index);
  //更新设置
  router.put('/user_setting', controller.userSetting.update);
};
