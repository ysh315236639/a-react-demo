import Cookies from 'js-cookie'
const ABORT_TIME = new Date(Date.now() + 864000000)
const DOMAIN = ''
// 设置token
export function setToken(token) {
  Cookies.set('user-Token', token, { domain: DOMAIN, expires: ABORT_TIME })
}

// 获取token
export function getToken() {
  return Cookies.get('user-Token')
}

// 移除登陆信息
export function removeToken() {
  Cookies.remove('user-Token', { domain: DOMAIN, expires: ABORT_TIME })
}