import Cookie from 'js-cookie'
export function getCookie (key) {
  let value = Cookie.get(key)
  if (value !== null && value !== undefined && value) {
    return JSON.parse(value)
  }
  return null
}
export function setCookie (key, value, time) {
  Cookie.set(key, value, time)
}
