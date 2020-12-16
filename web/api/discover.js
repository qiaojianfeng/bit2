import { getServer } from './base'
import { BASE_URL } from './config'

// 生成不同的业务接口服务实例
const photoServer = getServer(BASE_URL.photoBase)

/**
 * 获取当前用户的所有图片
 */
export const getDiscoverApi = async () => {
  return photoServer.get('/discover')
}
