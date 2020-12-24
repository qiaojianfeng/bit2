// @ts-nocheck
/*
 * @Author: qiaojianfeng
 * @Date: 2020-12-04 15:05:44
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2020-12-24 18:51:32
 */
const router = require('koa-router')()
const getUid = require('../middleware/getUid')
const { uploadPhoto, getPhoto, getDiscoverPhoto, getMyPhoto, getMyLike, addLike, delLike } = require('../controller/photo')

router.post('/', getUid(), uploadPhoto)
router.get('/detail', getPhoto)
router.delete('/', getPhoto)

router.get('/myPhoto', getUid(), getMyPhoto)
router.get('/like', getUid(), getMyLike)
router.post('/like', getUid(), addLike)
router.put('/like', getUid(), delLike)
router.get('/discover', getDiscoverPhoto)

module.exports = router
