/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-02 19:41:25
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-04 16:00:25
 */
const { NOT_AUTH, NOT_FOUND } = require('../config/code');
const { logError } = require('../utils/logger');

/**
 * 程序 trycatch模块
 * @param {*} ctx
 * @param {*} next
 */
const appCatch = async (ctx, next) => {
  const startT = new Date();
  let ms;
  try {
    await next().catch((err) => {
      ctx.status = err.status;
      if (err.status === NOT_AUTH.code) {
        ctx.body = { msg: NOT_AUTH.msg, code: NOT_AUTH.code };
      } else if (err.status === NOT_FOUND.code) {
        ctx.body = { code: NOT_FOUND.code, msg: NOT_FOUND.msg };
      } else {
        throw err;
      }
    });
    ms = new Date() - startT;
  } catch (error) {
    ms = new Date() - startT;
    logError(ctx, error, ms);
  }
};
module.exports = appCatch;
