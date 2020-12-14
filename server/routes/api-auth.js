/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-04 15:05:44
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-14 14:21:59
 */
const router = require('koa-router')()
const getUid = require('../middleware/getUid')
const { login, getUser, register } = require('../controller/auth')

/**
 * @api {post} /auth/login 用户登陆
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup Auth
 *
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 *
 * @apiSuccess {String} username 用户名
 * @apiSuccess {String} salt 盐
 * @apiSuccess {String} lastLoginT 最后登陆时间
 * @apiSuccess {String} loginIp 登陆IP
 * @apiSuccess {Number} role 身份
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       code:0,
 *       time:1232323,
 *       msg:'',
 *       data: {
 *          "username": "P000000000",
 *          "salt": 0,
 *          "lastLoginT": "2018-08-13 18:11:00",
 *          "loginIp": "127.0.0.1",
 *          "role": 0,
 *      }
 *    }
 */
router.post('/login', login)

/**
 * @api {post} /auth/logout 用户登出
 * @apiVersion 1.0.0
 * @apiName logout
 * @apiGroup Auth
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       code:0,
 *       time:1232323,
 *       msg:'',
 *       data: {
 *
 *      }
 *    }
 */

router.post('/logout', async ctx => (ctx.body = null))

/**
 * @api {get} /auth/user 获取登陆用户信息
 * @apiVersion 1.0.0
 * @apiName user
 * @apiGroup Auth
 * @apiHeader {String} Authorization 用户授权token
 *
 *  @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org",
 *     }
 *
 *
 * @apiSuccess {String} username 用户名
 * @apiSuccess {String} salt 盐
 * @apiSuccess {String} lastLoginT 最后登陆时间
 * @apiSuccess {String} loginIp 登陆IP
 * @apiSuccess {Number} role 身份
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       code:0,
 *       time:1232323,
 *       msg:'',
 *       data: {
 *          "username": "P000000000",
 *          "salt": 0,
 *          "lastLoginT": "2018-08-13 18:11:00",
 *          "loginIp": "127.0.0.1",
 *          "role": 0,
 *      }
 *    }
 */
router.get('/user', getUid(), getUser)
router.post('/register', register)

module.exports = router
