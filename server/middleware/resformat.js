/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-02 19:41:25
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-04 19:33:27
 */
const { OK, ERROR } = require('../config/code');
/**
 * 接口响应模版结构对象
 */
class ResTemplate {
  constructor(code, msg, data = '') {
    this.time = +new Date();
    this.code = code || ERROR.code;
    this.msg = msg || ERROR.msg;
    this.data = data;
  }
  ok({ code, msg }) {
    this.code = code;
    this.msg = msg;
    return this;
  }
}
/**
 * 格式化响应数据
 * @param {*} pattern
 */
const resFormat = function (pattern) {
  return async (ctx, next) => {
    const reg = new RegExp(pattern);
    try {
      await next();
    } catch (error) {
      ctx.status = 200;
      ctx.body = error.message;
      throw error;
    }
    if (reg.test(ctx.originalUrl)) {
      if (ctx.body && ctx.body.original) return (ctx.body = ctx.body.body);
      if (ctx.status === 200) {
        ctx.body = new ResTemplate().ok(OK);
      } else {
        ctx.body = new ResTemplate(ctx.status, ctx.message);
      }
      ctx.status = 200;
    }
  };
};
module.exports = { resFormat };
