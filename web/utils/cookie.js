const DOMAIN = location.hostname
const PATH = '/'
const DAYS = 30

export const getCookie = function(key) {
  let arr
  const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) return window.decodeURI(arr[2])
  else return null
}
export const setCookie = function(key, val, domain, path) {
  const exp = new Date()
  const dmn = domain || DOMAIN
  const pth = path || PATH
  exp.setTime(exp.getTime() + DAYS * 24 * 60 * 60 * 1000)
  document.cookie = key + '=' + window.encodeURI(val) + ';expires=' + exp.toUTCString() + ';path=' + pth + ';domain=' + dmn
}
export const delCookie = function(key, domain, path) {
  const exp = new Date()
  const dmn = domain || DOMAIN
  const pth = path || PATH
  const val = getCookie(key)
  exp.setTime(exp.getTime() - 1)
  if (val != null) {
    document.cookie = key + '=;expires=' + exp.toUTCString() + ';path=' + pth + ';domain=' + dmn
  }
}
