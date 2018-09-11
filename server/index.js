import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import { routeIndex } from './routes'
import { format } from './middlewares/format'
import configVar from './config'

async function start() {
  const app = new Koa()
  const host = process.env.HOST || configVar.host
  const port = process.env.PORT || configVar.port

  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  const nuxt = new Nuxt(config)

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(bodyParser())
  app.use(logger())
  app.use(format())
  app.use(routeIndex(Router).commonRouter().routes())

  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
