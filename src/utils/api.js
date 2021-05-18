/**
 * api接口统一管理
 */
import { get, post, setT, setB } from './http'
export const setAccesstToken = setT
export const setBaseUrl = setB
export const Authenticate = data => get('/api/Authenticate', data)// token验证
export const RetrieveCommonConfig = data => get('/api/RetrieveCommonConfig', data)// 获取服务器配置

export const RetrieveKnownPlayer = data => get('/api/RetrieveKnownPlayer', data)// 获取历史玩家

export const RetrieveOnlinePlayer = data => get('/api/RetrieveOnlinePlayer', data)// 获取在线玩家

export const RetrieveServerInfo = data => get('/api/RetrieveServerInfo', data) // 获取服务器信息

export const RetrieveServerStats = data => get('/api/RetrieveServerStats', data) // 获取服务器统计

export const RetrieveKnownPlayer3 = data => get('/api/RetrieveKnownPlayer', data)
