import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/Principal.vue'
import ConsultaQR from '../views/ConsultaQR.vue'


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
  {
    path: '/consultaqr/:codigo',
    name: 'ConsultaQR',
    component: ConsultaQR
  },

]

const router = new VueRouter({
  routes
})

export default router
