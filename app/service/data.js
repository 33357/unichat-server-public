/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:42:42
 * @LastEditors: 33357
 */
'use strict';

const Service = require('egg').Service;
class DataService extends Service {
  //获取Data
  async getData({ data }) {
    console.log('getData');
    const { ctx } = this;
    if (data === 'tokenList') {
      const res = ctx.helper.TokenList;
      return { code: 200, data: { tokenList: res } };
    }
  }
}

module.exports = DataService;
