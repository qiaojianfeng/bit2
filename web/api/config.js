import { getCookie } from '@/utils/cookie'
// 服务端接口地址
// eslint-disable-next-line
const APIS = {
  development: {
    authBase: '//127.0.0.1'
  },
  production: {
    authBase: '//bit2.cool'
  }
}

export const BASE_URL = APIS[process.env.VUE_APP_ENV]
export const HEADERS = () => {
  return {
    Authorization: getCookie('token'),
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}
