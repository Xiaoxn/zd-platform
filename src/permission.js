import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // determine whether the user has logged in
  const hasToken = getToken()

  const roles = [{ name: 'Demo', path: 'Demo', children: [] }]
  const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
  router.addRoutes(accessRoutes)
  next()
})
