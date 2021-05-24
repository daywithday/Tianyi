import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const ServerKey = 'Server'
const PortKey = 'Port'
const Translate = 'Translate'
const Version = 'Version'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 9999 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getServer() {
  return Cookies.get(ServerKey)
}

export function setServer(server) {
  return Cookies.set(ServerKey, server, { expires: 36500 })
}

export function removeServer() {
  return Cookies.remove(ServerKey)
}

export function getPort() {
  return Cookies.get(PortKey)
}

export function setPort(port) {
  return Cookies.set(PortKey, port, { expires: 36500 })
}

export function removePort() {
  return Cookies.remove(PortKey)
}

export function getTranslate() {
  return Cookies.get(Translate)
}

export function setTranslate(content) {
  return Cookies.set(Translate, content, { expires: 36500 })
}

export function removeTranslate() {
  return Cookies.remove(Translate)
}

export function getVersion() {
  return Cookies.get(Version)
}

export function setVersion(content) {
  return Cookies.set(Version, content, { expires: 36500 })
}

export function removeVersion() {
  return Cookies.remove(Version)
}