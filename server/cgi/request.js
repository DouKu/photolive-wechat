import axios from 'axios'
import config from '../config'
import { packPhotoliveReqData } from '../utils'

/**
 * @method 根据参数生成photolive的通用请求
 * @param {string} interfaceName 接口名
 * @param {object} data 请求数据
 * @param {string} extData 扩展数据
 * @return {promise}
 * @description 根据参数请求工单后端接口
 */
export const commonPhotoliveRequest = (interfaceName, data, extData) => {
  const dataObj = packPhotoliveReqData(interfaceName, data, extData)
  const options = {
    method: 'post',
    url: config.interface,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: dataObj
  }
  return axios.request(options)
}
