/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:46:46
 * @LastEditors: 33357
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  //匹配v1
  app.router.prefix('/api/v1');
  //user路径
  require('./router/api/v1/user')(app);
  //usersetting路径
  require('./router/api/v1/user_setting')(app);
  //data路径
  require('./router/api/v1/data')(app);
  //io路径
  require('./router/api/v1/io')(app);
};
