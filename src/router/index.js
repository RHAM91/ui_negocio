import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/Principal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/principal'
  },
  {
      path: '/',
      redirect: '/principal',
  },
  {
      path: '/principal',
      name: 'Principal',
      component: Principal
  },

]

const router = new VueRouter({
  routes
})

export default router
