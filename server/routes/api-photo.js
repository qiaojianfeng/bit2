/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-04 15:05:44
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-15 19:09:01
 */
const router = require('koa-router')()
const getUid = require('../middleware/getUid')
const { add, getMyPhoto } = require('../controller/photo')

router.post('/', getUid(), add)
router.delete('/', add)

router.get('/myPhoto', getMyPhoto)
router.get('/discover', add)

module.exports = router
