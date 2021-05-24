/**
 * api接口统一管理
 */
import { get, post, rongPost, setT, setB } from './http'
export const setAccesstToken = setT
export const setBaseUrl = setB
export const Authenticate = data => get('/api/Authenticate', data)// token验证

export const RetrieveCommonConfig = data => get('/api/RetrieveCommonConfig', data)// 获取服务器配置
export const UpdateCommonConfig = data => post('/api/UpdateCommonConfig', data)// 更新服务器配置

export const RetrieveFunctionState = data => get('/api/RetrieveFunctionState', data)// 获取功能管理
export const UpdateFunctionState = data => post('/api/UpdateFunctionState?isBatch=true', data)// 更新功能管理
export const RongUpdateFunctionState = data => rongPost('/api/UpdateFunctionState?isBatch=true', data)// 更新功能管理

export const RetrieveGameNoticeConfig = data => get('/api/RetrieveGameNoticeConfig', data)// 获取游戏公告
export const UpdateGameNoticeConfig = data => post('/api/UpdateGameNoticeConfig', data)// 更新游戏公告

export const RetrieveTeleportHomeConfig = data => get('/api/RetrieveTeleportHomeConfig', data)// 获取私人回家配置
export const UpdateTeleportHomeConfig = data => post('/api/UpdateTeleportHomeConfig', data)// 更新私人回家配置

export const RetrieveTeleportCityConfig = data => get('/api/RetrieveTeleportCityConfig', data)// 获取公共回城配置
export const UpdateTeleportCityConfig = data => post('/api/UpdateTeleportCityConfig', data)// 更新公共回城配置

export const RetrieveCityPosition = data => get('/api/RetrieveCityPosition', data)// 获取公共回城列表
export const UpdateCityPosition = data => post('/api/UpdateCityPosition', data)// 更新公共回城点
export const CreateCityPosition = data => post('/api/CreateCityPosition', data)// 创建公共回城点

export const RetrievePointsSystemConfig = data => get('/api/RetrievePointsSystemConfig', data)// 获取积分系统配置
export const UpdatePointsSystemConfig = data => post('/api/UpdatePointsSystemConfig', data)// 更新积分系统配置

export const RetrievePlayerPoints = data => get('/api/RetrievePlayerPoints', data)// 获取玩家积分信息
export const UpdatePlayerPoints = data => post('/api/UpdatePlayerPoints', data)// 更新玩家积分

export const RetrieveKnownPlayer = data => get('/api/RetrieveKnownPlayer', data)// 获取历史玩家
export const RetrieveOnlinePlayer = data => get('/api/RetrieveOnlinePlayer', data)// 获取在线玩家
export const RetrieveInventory = data => get('/api/RetrieveInventory', data)// 获取玩家背包

export const RetrieveServerInfo = data => get('/api/RetrieveServerInfo', data) // 获取服务器信息

export const RetrieveServerStats = data => get('/api/RetrieveServerStats', data) // 获取服务器统计

export const RetrieveChatLogPaged = data => post('/api/RetrieveChatLogPaged', data) // 获取聊天记录

export const RetrieveLocalization = data => get('/api/RetrieveLocalization', data) // 获取背包翻译
