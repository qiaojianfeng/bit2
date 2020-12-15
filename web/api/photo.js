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

export const getMyPhotoApi = async () => {
  return photoServer.get('/myPhoto')
}
