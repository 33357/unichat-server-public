/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:28:36
 * @LastEditors: 33357
 */
'use strict';

const HttpController = require('../core/http_controller');

class DataController extends HttpController {
  // 获取Data
  async index() {
    try {
      console.log('data index');
      const { service, ctx } = this;
      const res = await service.data.getData(ctx.getData);
      this.returnRes(res);
    } catch (err) {
      console.log(err);
      this.returnRes({ code: err.code });
    }
  }
}

module.exports = DataController;
