/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-03 19:57:23
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-14 19:42:17
 */
const router = require('koa-router')()
const admin = require('./api-admin')
const auth = require('./api-auth')
const picture = require('./api-picture')
/**
 * 配置前缀
 */
router.prefix('/api')
/**
 * 注册子路由
 */
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/auth', auth.routes(), auth.allowedMethods())
router.use('/picture', auth.routes(), auth.allowedMethods())

module.exports = router
