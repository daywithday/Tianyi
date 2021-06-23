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
export const RetrievePlayerPointsPaged = data => post('/api/RetrievePlayerPointsPaged', data)// 获取积分信息列表
export const UpdatePlayerPoints = data => post('/api/UpdatePlayerPoints', data)// 更新玩家积分

export const RetrieveKnownPlayer = data => get('/api/RetrieveKnownPlayers', data)// 获取历史玩家
export const RetrieveOnlinePlayer = data => get('/api/RetrieveOnlinePlayers', data)// 获取在线玩家
export const RetrieveInventory = data => get('/api/RetrieveInventory', data)// 获取玩家背包

export const RetrieveServerInfo = data => get('/api/RetrieveServerInfo', data) // 获取服务器信息

export const RetrieveServerStats = data => get('/api/RetrieveServerStats', data) // 获取服务器统计

export const RetrieveChatLogPaged = data => post('/api/RetrieveChatLogPaged', data) // 获取聊天记录

export const RetrieveLocalization = data => get('/api/RetrieveLocalization', data) // 获取背包翻译

export const map = data => get(`/map/${data.x}/${data.y}/${data.z}`, {}) // 获取地图

export const RetrieveGameStoreConfig = data => get('/api/RetrieveGameStoreConfig', data) // 获取商城配置
export const UpdateGameStoreConfig = data => post('/api/UpdateGameStoreConfig', data) // 更新商城配置

export const RetrieveGoods = data => get('/api/RetrieveGoods', data) // 获取商城商品列表
export const CreateGoods = data => post('/api/CreateGoods', data) // 创建商品
export const DeleteGoods = data => post('/api/DeleteGoods', data) // 删除商品
export const UpdateGoods = data => post('/api/UpdateGoods', data) // 更新商品
export const RetrieveContentTypes = data => get('/api/RetrieveContentTypes', data) // 获取商品类型列表

export const RetrieveLotterySystemConfig = data => get('/api/RetrieveLotterySystemConfig', data) // 获取抽奖配置
export const UpdateLotterySystemConfig = data => post('/api/UpdateLotterySystemConfig', data) // 更新抽奖配置

export const RetrieveLottery = data => get('/api/RetrieveLottery', data) // 获取抽奖奖品列表
export const CreateLottery = data => post('/api/CreateLottery', data) // 创建奖品
export const DeleteLottery = data => post('/api/DeleteLottery', data) // 删除奖品
export const UpdateLottery = data => post('/api/UpdateLottery', data) // 更新奖品

export const RetrieveTeleportFriendConfig = data => get('/api/RetrieveTeleportFriendConfig', data) // 获取好友传送
export const UpdateTeleportFriendConfig = data => post('/api/UpdateTeleportFriendConfig', data) // 更新好友传送

export const RetrieveDeathPenaltyConfig = data => get('/api/RetrieveDeathPenaltyConfig', data) // 获取死亡惩罚
export const UpdateDeathPenaltyConfig = data => post('/api/UpdateDeathPenaltyConfig', data) // 更新死亡惩罚

export const RetrieveOnlineRewardConfig = data => get('/api/RetrieveOnlineRewardConfig', data) // 获取在线奖励
export const UpdateOnlineRewardConfig = data => post('/api/UpdateOnlineRewardConfig', data) // 更新在线奖励

export const RetrieveZombieKillRewardConfig = data => get('/api/RetrieveZombieKillRewardConfig', data) // 获取击杀奖励
export const UpdateZombieKillRewardConfig = data => post('/api/UpdateZombieKillRewardConfig', data) // 更新击杀奖励
