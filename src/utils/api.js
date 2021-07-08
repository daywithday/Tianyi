/**
 * api接口统一管理
 */
import { get, post, setT, setB } from './http'
export const setAccesstToken = setT
export const setBaseUrl = setB
export const Authenticate = data => get('/api/Authenticate', data)// token验证

export const RetrieveCommonConfig = data => get('/api/CommonConfig/RetrieveCommonConfig', data)// 获取服务器配置
export const UpdateCommonConfig = data => post('/api/CommonConfig/UpdateCommonConfig', data)// 更新服务器配置

export const RetrieveFunctionState = data => get('/api/FunctionManage/RetrieveFunctionState', data)// 获取功能管理
export const UpdateFunctionState = data => post('/api/FunctionManage/UpdateFunctionState?isBatch=true', data)// 更新功能管理

export const RetrieveGameNoticeConfig = data => get('/api/GameNotice/RetrieveGameNoticeConfig', data)// 获取游戏公告
export const RetrieveAvailableVariables = data => get('/api/GameNotice/RetrieveAvailableVariables', data)// 获取游戏公告可用变量
export const UpdateGameNoticeConfig = data => post('/api/GameNotice/UpdateGameNoticeConfig', data)// 更新游戏公告

export const RetrieveTeleportHomeConfig = data => get('/api/TeleportHome/RetrieveTeleportHomeConfig', data)// 获取私人回家配置
export const TeleportHomeRetrieveAvailableVariables = data => get('/api/TeleportHome/RetrieveAvailableVariables', data)// 获取私人回家配置可用变量
export const UpdateTeleportHomeConfig = data => post('/api/TeleportHome/UpdateTeleportHomeConfig', data)// 更新私人回家配置

export const RetrieveTeleportCityConfig = data => get('/api/TeleportCity/RetrieveTeleportCityConfig', data)// 获取公共回城配置
export const TeleportCityRetrieveAvailableVariables = data => get('/api/TeleportCity/RetrieveAvailableVariables', data)// 获取公共回城配置可用变量
export const UpdateTeleportCityConfig = data => post('/api/TeleportCity/UpdateTeleportCityConfig', data)// 更新公共回城配置

export const RetrieveCityPosition = data => get('/api/TeleportCity/RetrieveCityPosition', data)// 获取公共回城列表
export const UpdateCityPosition = data => post('/api/TeleportCity/UpdateCityPosition', data)// 更新公共回城点
export const CreateCityPosition = data => post('/api/TeleportCity/CreateCityPosition', data)// 创建公共回城点

export const RetrievePointsSystemConfig = data => get('/api/PointsSystem/RetrievePointsSystemConfig', data)// 获取积分系统配置
export const PointsSystemRetrieveAvailableVariables = data => get('/api/PointsSystem/RetrieveAvailableVariables', data)// 获取积分系统配置的可用配置
export const UpdatePointsSystemConfig = data => post('/api/PointsSystem/UpdatePointsSystemConfig', data)// 更新积分系统配置

export const RetrievePlayerPoints = data => get('/api/PointsSystem/RetrievePlayerPoints', data)// 获取玩家积分信息
export const RetrievePlayerPointsPaged = data => post('/api/PointsSystem/RetrievePlayerPointsPaged', data)// 获取积分信息列表
export const UpdatePlayerPoints = data => post('/api/PointsSystem/UpdatePlayerPoints', data)// 更新玩家积分

export const RetrieveKnownPlayer = data => get('/api/Players/RetrieveKnownPlayers', data)// 获取历史玩家
export const RetrieveOnlinePlayer = data => get('/api/Players/RetrieveOnlinePlayers', data)// 获取在线玩家
export const RetrieveInventory = data => get('/api/Players/RetrieveInventory', data)// 获取玩家背包

export const RetrieveServerInfo = data => get('/api/ServerManage/RetrieveServerInfo', data) // 获取服务器信息

export const RetrieveServerStats = data => get('/api/ServerManage/RetrieveServerStats', data) // 获取服务器统计

export const RetrieveChatLogPaged = data => post('/api/ChatLog/RetrieveChatLogPaged', data) // 获取聊天记录

export const RetrieveLocalization = data => get('/api/Localization/RetrieveLocalization', data) // 获取背包翻译

export const map = data => get(`/map/${data.x}/${data.y}/${data.z}`, {}) // 获取地图

export const RetrieveGameStoreConfig = data => get('/api/GameStore/RetrieveGameStoreConfig', data) // 获取商城配置
export const GameStoreRetrieveAvailableVariables = data => get('/api/GameStore/RetrieveAvailableVariables', data) // 获取商城配置可用变量
export const UpdateGameStoreConfig = data => post('/api/GameStore/UpdateGameStoreConfig', data) // 更新商城配置

export const RetrieveGoods = data => get('/api/GameStore/RetrieveGoods', data) // 获取商城商品列表
export const CreateGoods = data => post('/api/GameStore/CreateGoods', data) // 创建商品
export const DeleteGoods = data => post('/api/GameStore/DeleteGoods', data) // 删除商品
export const UpdateGoods = data => post('/api/GameStore/UpdateGoods', data) // 更新商品
export const RetrieveContentTypes = data => get('/api/GameStore/RetrieveContentTypes', data) // 获取商品类型列表

export const RetrieveLotterySystemConfig = data => get('/api/LotterySystem/RetrieveLotterySystemConfig', data) // 获取抽奖配置
export const LotterySystemRetrieveAvailableVariables = data => get('/api/LotterySystem/RetrieveAvailableVariables', data) // 获取抽奖配置可用变量
export const UpdateLotterySystemConfig = data => post('/api/LotterySystem/UpdateLotterySystemConfig', data) // 更新抽奖配置

export const RetrieveLottery = data => get('/api/LotterySystem/RetrieveLottery', data) // 获取抽奖奖品列表
export const CreateLottery = data => post('/api/LotterySystem/CreateLottery', data) // 创建奖品
export const DeleteLottery = data => post('/api/LotterySystem/DeleteLottery', data) // 删除奖品
export const UpdateLottery = data => post('/api/LotterySystem/UpdateLottery', data) // 更新奖品

export const RetrieveTeleportFriendConfig = data => get('/api/TeleportFriend/RetrieveTeleportFriendConfig', data) // 获取好友传送
export const TeleportFriendRetrieveAvailableVariables = data => get('/api/TeleportFriend/RetrieveAvailableVariables', data) // 获取好友传送可用变量
export const UpdateTeleportFriendConfig = data => post('/api/TeleportFriend/UpdateTeleportFriendConfig', data) // 更新好友传送

export const RetrieveDeathPenaltyConfig = data => get('/api/ExtensionFunctions/RetrieveDeathPenaltyConfig', data) // 获取死亡惩罚
export const RetrieveAvailableVariables_DeathPenalty = data => get('/api/ExtensionFunctions/RetrieveAvailableVariables_DeathPenalty', data) // 获取死亡惩罚可用变量
export const UpdateDeathPenaltyConfig = data => post('/api/ExtensionFunctions/UpdateDeathPenaltyConfig', data) // 更新死亡惩罚

export const RetrieveOnlineRewardConfig = data => get('/api/ExtensionFunctions/RetrieveOnlineRewardConfig', data) // 获取在线奖励
export const RetrieveAvailableVariables_OnlineReward = data => get('/api/ExtensionFunctions/RetrieveAvailableVariables_OnlineReward', data) // 获取在线奖励可用变量
export const UpdateOnlineRewardConfig = data => post('/api/ExtensionFunctions/UpdateOnlineRewardConfig', data) // 更新在线奖励

export const RetrieveZombieKillRewardConfig = data => get('/api/KillReward/RetrieveKillRewardConfig', data) // 获取击杀奖励
export const KillRewardRetrieveAvailableVariables = data => get('/api/KillReward/RetrieveAvailableVariables', data) // 获取击杀奖励可用变量
export const UpdateZombieKillRewardConfig = data => post('/api/KillReward/UpdateKillRewardConfig', data) // 更新击杀奖励

export const RetrieveKillReward = data => get('/api/KillReward/RetrieveKillReward', data) // 获取击杀奖励列表
export const CreateKillReward = data => post('/api/KillReward/CreateKillReward', data) // 创建击杀奖励
export const DeleteKillReward = data => post('/api/KillReward/DeleteKillReward', data) // 删除击杀奖励
export const UpdateKillReward = data => post('/api/KillReward/UpdateKillReward', data) // 更新击杀奖励

export const RetrieveAutoRestartConfig = data => get('/api/ExtensionFunctions/RetrieveAutoRestartConfig', data) // 获取重启配置
export const RetrieveAvailableVariables_AutoRestart = data => get('/api/ExtensionFunctions/RetrieveAvailableVariables_AutoRestart', data) // 获取重启配置可用变量
export const UpdateAutoRestartConfig = data => post('/api/ExtensionFunctions/UpdateAutoRestartConfig', data) // 更新重启配置
export const RestartServer = data => get('/api/ExtensionFunctions/RestartServer', data) // 重启服务器

export const RetrieveCDKeyExchangeConfig = data => get('/api/CDKeyExchange/RetrieveCDKeyExchangeConfig', data) // 获取CDKey奖励
export const CDKeyExchangeRetrieveAvailableVariables = data => get('/api/CDKeyExchange/RetrieveAvailableVariables', data) // 获取CDKey奖励可用变量
export const UpdateCDKeyExchangeConfig = data => post('/api/CDKeyExchange/UpdateCDKeyExchangeConfig', data) // 更新CDKey奖励

export const RetrieveCDKeyPaged = data => post('/api/CDKeyExchange/RetrieveCDKeyPaged', data) // 获取CDKey奖励列表
export const CreateCDKey = data => post('/api/CDKeyExchange/CreateCDKey', data) // 创建CDKey奖励
export const DeleteCDKey = data => post('/api/CDKeyExchange/DeleteCDKey', data) // 删除CDKey奖励
export const UpdateCDKey = data => post('/api/CDKeyExchange/UpdateCDKey', data) // 更新CDKey奖励
export const RetrieveCDKeyExchangeLogPaged = data => post('/api/CDKeyExchange/RetrieveCDKeyExchangeLogPaged', data) // 获取CDKey奖励兑换记录