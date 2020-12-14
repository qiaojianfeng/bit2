/* eslint-disable  */
export const requestInterceptor = function(config) {
  return config
}

export const requestInterceptorError = function(error) {
  return Promise.reject(error)
}

export const responseInterceptor = function(response) {
  const data = response.data || { code: undefined }
  const code = data.code
  const origin = window.location.origin
  const pageURL = window.location.href
  if (code && code == 401) {
    window.location.href = origin + '/login' + '?redirect=' + encodeURIComponent(pageURL)
    throw new Error(data.msg)
  }
  return response
}
export const responseInterceptorError = function(error) {
  return Promise.reject(error)
}
