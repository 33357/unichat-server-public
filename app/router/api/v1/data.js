/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:39:44
 * @LastEditors: 33357
 */
'use strict';

module.exports = (app) => {
  const { router, controller } = app;
  //获取data
  router.get('/data', controller.data.index);
};
