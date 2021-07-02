
const TokenKey = 'Admin-Token'
const ServerKey = 'Server'
const PortKey = 'Port'
const Translate = 'Translate'
const Version = 'Version'
const lang = 'lang'
export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

export function getServer() {
  return localStorage.getItem(ServerKey)
}

export function setServer(server) {
  return localStorage.setItem(ServerKey, server)
}

export function removeServer() {
  return localStorage.removeItem(ServerKey)
}

export function getPort() {
  return localStorage.getItem(PortKey)
}

export function setPort(port) {
  return localStorage.setItem(PortKey, port)
}

export function removePort() {
  return localStorage.removeItem(PortKey)
}

export function getTranslate() {
  return localStorage.getItem(Translate)
}

export function setTranslate(content) {
  return localStorage.setItem(Translate, content)
}

export function removeTranslate() {
  return localStorage.removeItem(Translate)
}

export function getVersion() {
  return localStorage.getItem(Version)
}

export function setVersion(content) {
  return localStorage.setItem(Version, content)
}

export function removeVersion() {
  return localStorage.removeItem(Version)
}

export function getlang() {
  return localStorage.getItem(lang)
}

export function setlang(content) {
  return localStorage.setItem(lang, content)
}
