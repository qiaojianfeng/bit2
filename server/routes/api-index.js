/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-03 19:57:23
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-04 15:11:04
 */
const router = require('koa-router')();
const admin = require('./api-admin');
const auth = require('./api-auth');

/**
 * 配置前缀
 */
router.prefix('/api');
/**
 * 注册子路由
 */
router.use('/admin', admin.routes(), admin.allowedMethods());
router.use('/auth', auth.routes(), auth.allowedMethods());

module.exports = router;
