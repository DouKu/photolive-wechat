import { photolive } from './photolive'

const routeIndex = (Router) => {
  const common = Symbol('common')
  const auth = Symbol('auth')
  class RouteIndex {
    constructor(Router) {
      this[common] = new Router()
      this[auth] = new Router()
      photolive(this[common], this[auth])
    }
    commonRouter() {
      return this[common]
    }
    authRouter() {
      return this[auth]
    }
  }
  return new RouteIndex(Router)
}

export {
  routeIndex
}
