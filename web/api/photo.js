// @ts-nocheck
import { getServer, instance } from './base'

import { BASE_URL, HEADERS } from './config'

// 生成不同的业务接口服务实例
const photoServer = getServer(BASE_URL.photoBase)
/**
 * 上传
 */
export const uploadApi = async files => {
  const fd = new FormData()
  files.forEach(item => fd.append('files', item))

  const extra = {
    baseURL: BASE_URL.photoBase,
    headers: HEADERS()
  }
  const res = await instance.post('/', fd, extra)
  return res.data
}
/**
 * 获取当前用户的所有图片
 */
export const getMyPhotoApi = async () => {
  return photoServer.get('/myPhoto')
}

/**
 * 获取图片详情
 * @param {*图片ID} id
 */
export const getPhotoApi = async _id => {
  return photoServer.get('/detail', { _id })
}

/**
 * 获取当前用户的所有点赞图片
 */
export const getMyLikeApi = async () => {
  return photoServer.get('/like')
}

/**
 * 获取当前用户的所有点赞图片
 * @param {*图片ID} id
 */
export const addLikeApi = async photoId => {
  return photoServer.post('/like', { _id: photoId })
}

/**
 * 获取当前用户的所有点赞图片
 * @param {*图片ID} id
 */
export const delLikeApi = async photoId => {
  return photoServer.put('/like', { _id: photoId })
}
