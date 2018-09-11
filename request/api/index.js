import rest from '../index'
import interfaces from './interfaces'

/**
 * @method 获取照片
 * @return {promise}
*/
const getPhoto = (data) => {
  let baseUrl = 'http://localhost:3001'
  if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://localhost:4001'
  }
  return rest.request({
    method: 'post',
    url: baseUrl + interfaces.photolive.getPhoto,
    data
  })
}

export default {
  getPhoto
}
