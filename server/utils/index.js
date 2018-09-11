/**
 * @method 根据参数生成格式的请求数据
 * @param {string} interfaceName 接口名
 * @param {object} para 请求数据
 * @return {object}
 * @description 根据参数生成market格式的请求数据
 */
export const packPhotoliveReqData = function (interfaceName, para, extData) {
  let data = {
    version: 1,
    eventId: Math.floor(Math.random() * 9999999) + 1,
    timestamp: new Date().getTime(),
    interface: {
      interfaceName: interfaceName,
      para: para
    }
  }
  data = Object.assign(data, extData)
  return data
}
