/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-04 15:05:44
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-14 19:45:08
 */
const router = require('koa-router')()
const getUid = require('../middleware/getUid')
const { add } = require('../controller/picture')

router.post('/', getUid(), add)
router.get('/', add)
router.delete('/', add)

module.exports = router
