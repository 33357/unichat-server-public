/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:50:05
 * @LastEditors: 33357
 */
'use strict';

const path = require('path');

module.exports = (app) => {
  //添加效验
  const directory = path.join(app.config.baseDir, 'app/validate');
  app.loader.loadToApp(directory, 'validate');
};
