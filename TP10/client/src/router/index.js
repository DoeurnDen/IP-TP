import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import authApi from '../providers/apis/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    }
  ]
})

// router.beforeEach(async (to, from, next)=>{
//   const me = await authApi.getMe();
//   const isAuthenticated = !!me
//   if(to.name.includes('home') && !isAuthenticated)  next({name: 'login'})
//   else next()
// })

export default router
