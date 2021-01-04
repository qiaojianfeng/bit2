/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-02 18:50:03
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-30 14:56:56
 */
const path = require('path')
const { folder, maxSize } = require('../config/base').logs

const baseLogPath = path.resolve(__dirname, '../../' + folder)
/**
 * 构造Logger 类
 */
class Logger {
  constructor(logType) {
    if (!logType) throw new Error('参数错误')
    this.type = 'dateFile'
    this.pattern = '-yyyy-MM-dd.log'
    this.alwaysIncludePattern = true
    this.encoding = 'utf-8'
    this.maxLogSize = maxSize
    this.numBackups = 3
    this.path = '/' + logType // 日志目录,
    this.filename = baseLogPath + this.path + '/' + logType // 日志输出完整路径
  }
}

module.exports = {
  //日志格式等设置
  appenders: {
    'rule-console': { type: 'console' },
    errorLogger: new Logger('error'),
    resLogger: new Logger('response'),
    infoLogger: new Logger('info')
  },
  //供外部调用的名称和对应设置定义
  categories: {
    default: { appenders: ['rule-console'], level: 'all' },
    resLogger: { appenders: ['resLogger'], level: 'info' },
    errorLogger: { appenders: ['errorLogger'], level: 'error' },
    infoLogger: { appenders: ['infoLogger'], level: 'info' },
    http: { appenders: ['resLogger'], level: 'info' }
  },
  pm2: true,
  //replaceConsole: true,
  baseLogPath
}
