/**   
 * api接口统一管理
 */
 import { get, post,setT,setB } from './http'
 export const  setToken = setT
 export const  setBaseUrl = setB
 export const apiAddress = data => get('/api/RetrieveCommonConfig', data);

 