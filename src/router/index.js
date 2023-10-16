import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro,
    meta:{
      autentificado: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) =>{

  let origen  = localStorage.getItem('rhomio')
  let usuario

  if(origen == null || origen == '' || origen == undefined){ // verifica si existe localstoage
    usuario = false
  }else{ // verifica si el token es valido o si existe token
    let parse_origen = JSON.parse(origen)

    if (parse_origen.token_sesion) {
      usuario = true
    }else{
      usuario = false
    }

  }

  let autorizado = to.matched.some(record => record.meta.autentificado)

  if (autorizado && !usuario) {
    next('login')
  }else if(!autorizado && usuario){
    next('Dash')
  }else{
    next()
  }

  
})


export default router
