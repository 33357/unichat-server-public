/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:30:14
 * @LastEditors: 33357
 */
'use strict';

const { Controller } = require('egg');
class HttpController extends Controller {
  // 返回数据
  returnRes({ code, data = null }) {
    console.log('returnRes', code, data);
    if (code === undefined) {
      code = 400;
    }
    this.ctx.status = 200;
    this.ctx.body = {
      code,
      message: this.ctx.helper.ErrorCode[code],
      data,
    };
  }
}

module.exports = HttpController;
