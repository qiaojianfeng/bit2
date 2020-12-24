/* eslint-disable  */
export const requestInterceptor = function(config) {
  return config
}

export const requestInterceptorError = function(error) {
  return Promise.reject(error)
}

export const responseInterceptor = function(response) {
  const { origin, href } = window.location
  const data = response.data || { code: undefined }
  const code = data.code
  const apiUrl = response.config.url
  const ignoreApis = ['/user', '/discover']
  if (code && code == 401 && !ignoreApis.includes(apiUrl)) {
    window.location.href = origin + '/login' + '?redirect=' + encodeURIComponent(href)
    throw new Error(data.msg)
  }
  return response
}
export const responseInterceptorError = function(error) {
  return Promise.reject(error)
}
