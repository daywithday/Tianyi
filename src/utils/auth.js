import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const ServerKey = 'Server'
const PortKey = 'Port'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getServer() {
  return Cookies.get(ServerKey)
}

export function setServer(server) {
  return Cookies.set(ServerKey, server)
}

export function removeServer() {
  return Cookies.remove(ServerKey)
}

export function getPort() {
  return Cookies.get(PortKey)
}

export function setPort(port) {
  return Cookies.set(PortKey, port)
}

export function removePort() {
  return Cookies.remove(PortKey)
}