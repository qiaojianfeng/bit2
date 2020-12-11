/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-02 18:50:23
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-02 19:20:20
 */
const log4js = require('log4js');
const logConf = require('../config/log');
const fs = require('fs');

//加载配置文件
log4js.configure(logConf);

//调用预先定义的日志名称
const resLogger = log4js.getLogger('resLogger');
const errorLogger = log4js.getLogger('errorLogger');
const infoLogger = log4js.getLogger('infoLogger');
const consoleLogger = log4js.getLogger();
/**
 * 封装错误日志
 * @param {*} info
 */
const formatInfo = function (info) {
  let logText = new String();
  logText += '\n' + '***************info log start ***************' + '\n';
  logText += 'info detail: ' + '\n' + JSON.stringify(info) + '\n';
  logText += '*************** info log end ***************' + '\n';
  return logText;
};
/**
 * 格式化响应日志
 * @param {*} ctx
 * @param {*} resTime
 */
const formatRes = function (ctx, resTime) {
  let logText = new String();
  logText += '\n' + '*************** response log start ***************' + '\n';
  logText += formatReqLog(ctx.request, resTime);
  logText += 'response status: ' + ctx.status + '\n';
  logText += 'response body: ' + '\n' + JSON.stringify(ctx.body) + '\n';
  logText += '*************** response log end ***************' + '\n';
  return logText;
};
/**
 * 格式化错误日志
 * @param {*} ctx
 * @param {*} err
 * @param {*} resTime
 */
const formatError = function (ctx, err, resTime) {
  let logText = new String();
  logText += '\n' + '*************** error log start ***************' + '\n';
  logText += formatReqLog(ctx.request, resTime);
  logText += 'err name: ' + err.name + '\n';
  logText += 'err message: ' + err.message + '\n';
  logText += 'err stack: ' + err.stack + '\n';
  logText += '*************** error log end ***************' + '\n';
  return logText;
};
/**
 * 格式化请求日志
 * @param {*} req
 * @param {*} resTime
 */
const formatReqLog = function (req, resTime) {
  let logText = new String();
  const method = req.method;
  logText += 'request method: ' + method + '\n';
  logText += 'request originalUrl:  ' + req.originalUrl + '\n';
  logText += 'request client ip:  ' + req.ip + '\n';
  if (method === 'GET') {
    logText += 'request query:  ' + JSON.stringify(req.query) + '\n';
  } else {
    logText += 'request body: ' + '\n' + JSON.stringify(req.body) + '\n';
  }
  //服务器响应时间
  logText += 'response time: ' + resTime + '\n';
  return logText;
};
/**
 * 检查路径有效性
 * @param {*} pathStr
 */
const confirmPath = function (pathStr) {
  if (!fs.existsSync(pathStr)) fs.mkdirSync(pathStr);
};
module.exports = {
  logError: function (ctx, error, resTime) {
    if (ctx && error) {
      errorLogger.error(formatError(ctx, error, resTime));
    }
  },
  error: function (err) {
    errorLogger.error(err);
  },
  info: function (info) {
    infoLogger.info(info);
  },
  logResponse: function (ctx, resTime) {
    if (ctx) {
      resLogger.info(formatRes(ctx, resTime));
    }
  },
  logInfo: function (info) {
    if (info) {
      consoleLogger.info(formatInfo(info));
    }
  },
  /**
   * 初始化日志目录
   */
  init: function () {
    const { appenders, baseLogPath } = logConf;
    if (baseLogPath) {
      confirmPath(baseLogPath);
      for (var i = 0, len = appenders.length; i < len; i++) {
        if (appenders[i].path) {
          confirmPath(baseLogPath + appenders[i].path);
        }
      }
    }
  },
};
