import { commonPhotoliveRequest } from '../cgi/request'
import interfaceInstance from '../instances/interfaces'

/**
 * @method 获取智能客服的回答
 */
const getPhoto = async (ctx, next) => {
  const {
    id
  } = ctx.request.body
  const params = {
    id
  }
  const { data } = await commonPhotoliveRequest(interfaceInstance.photolive.getPhoto, params)
  if (data.code === 0) {
    ctx.body = data
  }
}

export default {
  getPhoto
}
