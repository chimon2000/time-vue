import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import HomeComponent from './home/home.vue'
import ErrorComponent from './error/error.vue'
import LoginComponent from './login/login.vue'
import app from './shared/feathers.service'
Vue.use(VueRouter)

let authenticated = false
const handleAuthenticated = () => authenticated = true

export const router = new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to somethi
  ng other than an empty string.
  * Example: '/' instead of current ''
*
* If switching back to default "hash" mode, don't forget to set the
* build publicPath back to '' so Cordova builds work again.
*/
  routes: [
    {
      path: '/',
      component: HomeComponent
    }, // Default
    {
      path: '/login',
      component: LoginComponent,
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter', authenticated)

        if (authenticated) return next('/')

        return next()
      }
    }, // Default
    { path: '*', component: ErrorComponent } // Not found
  ]
})

router.beforeEach((to, from, next) => {
  if (authenticated) return next()

  if (to.path.includes('login')) return next()

  app.authenticate()
    .then(handleAuthenticated)
    .then(() => next())
    .catch(() => next('/login'))
})

export default router
