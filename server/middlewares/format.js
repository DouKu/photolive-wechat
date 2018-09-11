export const format = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.body = {
        code: err.statusCode || err.status || -1,
        msg: err.message
      }
    }
  }
}
