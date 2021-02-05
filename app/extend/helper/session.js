/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:33:33
 * @LastEditors: 33357
 */
'use strict';

const ONE_DAY = 1000 * 60 * 60 * 24;

const session = {
  // 获取session
  async get(key) {
    const res = await this.redis.get(key);
    if (!res) return null;
    return JSON.parse(res);
  },
  // 设置session
  async set({ key, value, maxAge }) {
    maxAge = typeof maxAge === 'number' ? maxAge : ONE_DAY;
    value = JSON.stringify(value);
    await this.redis.set(key, value, 'PX', maxAge);
  },
  // 注销session
  async destroy(key) {
    await this.redis.del(key);
  },
};

module.exports = session;
