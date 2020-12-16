/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-04 15:05:44
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-16 17:36:05
 */
const router = require('koa-router')()
const getUid = require('../middleware/getUid')
const { uploadPhoto, getPhoto, getDiscoverPhoto, getMyPhoto } = require('../controller/photo')

router.post('/', getUid(), uploadPhoto)
router.get('/', getPhoto)
router.delete('/', getPhoto)

router.get('/myPhoto', getMyPhoto)
router.get('/discover', getDiscoverPhoto)

module.exports = router
