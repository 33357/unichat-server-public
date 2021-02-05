/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:45:39
 * @LastEditors: 33357
 */
'use strict';

const Sign = require('../extend/helper/sign');

module.exports = app => {
  const { validator } = app;
  // 校验ethAddress
  validator.addRule('ethAddress', (rule, testAddress) => {
    if (testAddress !== ' ') {
      if (!Sign.isEthAddress({ testAddress })) {
        return '应该是ethAddress';
      }
    }
  });
};
