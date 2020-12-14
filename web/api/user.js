import { getServer } from './base'
import { BASE_URL } from './config'

// 生成不同的业务接口服务实例
const authServer = getServer(BASE_URL.authBase + '/auth')
/**
 * 登录
 */
export const loginApi = ({ username, password }) => {
  return authServer.post('/login', {
    username,
    password
  })
}
/**
 * 注册
 * @param {*} param0
 */
export const registerApi = ({ username, password }) => {
  return authServer.post('/register', {
    username,
    password
  })
}

/**
 * 获取登录用户信息
 */

export const getProfileApi = () => {
  return authServer.get('/user')
}
