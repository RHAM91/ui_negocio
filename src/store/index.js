import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import axios from 'axios'
import { minix, pregunta } from '../components/functions/alertas'


Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'rhomio',
  storage: window.localStorage,
  reducer: state => ({
  }) 
})



export default new Vuex.Store({
  state: {

    preferencias:{
      IP: process.env.NODE_ENV == 'production' ? 'https://arub4.ddns.net/app/tiendaisabel' : 'http://localhost:8015',
      PUERTO: 1337
    }

  },
  getters: {
  },
  mutations: {
  },
  actions: {

    async obtener_data_publico({commit, state, dispatch}, data){
      try {
        const config = {
          method: 'get',
          url: `${state.preferencias.IP}/api/${data.api}`,
          headers: {
            'Content-Type': 'application/json'
          }
        }
        
        let r = await axios(config)

        if (r.status == 200) {

          if (r.data.data.length == 0) {
            
            minix({icon: 'info', mensaje: 'NO HAY REGISTROS', tiempo: 3000})
            return []

          }else{
            return r.data.data
          }

        }else{
          return []
        }

      } catch (error) {
        console.log(error)
      }
    },
    async obtener_data({commit, state, dispatch}, data){
      try {
        const config = {
          method: 'get',
          url: `${state.preferencias.IP}/api/${data.api}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.token_sesion}`
          }
        }

        let r = await axios(config)
        
        if (r.status == 200) {

          if (r.data.length == 0) {
            
            minix({icon: 'info', mensaje: 'NO HAY REGISTROS', tiempo: 3000})
            return []

          }else{
            return r.data
          }

        }else{
          return []
        }

      } catch (error) {  
        console.log(error)
      }
    },

  },
  plugins: [vuexPersist.plugin],
  modules: {
  }
})
