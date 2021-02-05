/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:41:27
 * @LastEditors: 33357
 */
'use strict';

module.exports = (app) => {
  const { router, controller } = app;
  //获取user
  router.get('/user', controller.user.index);
  //获取user登录信息
  router.get('/user/new', controller.user.new);
  //user登录
  router.post('/user', controller.user.create);
  //user注销
  router.delete('/user', controller.user.destroy);
};
