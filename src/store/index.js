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
    token_sesion: state.token_sesion
  }) 
})


function showAlert(message, callback) {
  alert(message);
  if (callback && typeof callback === 'function') {
    callback();
  }
}


export default new Vuex.Store({
  state: {
    token_sesion: '',
    preferencias:{
      IP: process.env.NODE_ENV == 'production' ? 'https://arub4.ddns.net/app/tiendaisabel' : 'http://localhost:8015',
      PUERTO: 1337
    }

  },
  getters: {
    token_sesion_formateado: state =>{
      let token_formateado = {
        headers:{
          Authorization: `Bearer ${state.token_sesion}`
        }
      }

      return token_formateado
    }
  },
  mutations: {
    set_token_sesion(state, data){
      state.token_sesion = data
    },

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
    async guardar_data({commit, state}, data){
      try {
        const config = {
          method: 'post',
          url: `${state.preferencias.IP}/api/${data.api}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.token_sesion}`
          },
          data: {
            data: data.formulario
          }
        }

        const r = await axios(config)

        if (r.status == 200) {
          if(r.data.message){
            minix({icon: 'info', mensaje: r.data.message, tiempo: 6000})
          }else{
            if (data.mensaje) {
              minix({icon: 'success', mensaje: data.mensaje, tiempo: 3000}) 
            }else{
              minix({icon: 'success', mensaje: 'GUARDADO CON EXITO', tiempo: 3000}) 
            }

            return r.data
          }

        }else{
          minix({icon: 'info', mensaje: 'HUBO UN ERROR AL GUARDAR', tiempo: 6000})
        }

      } catch (error) {
        minix({icon: 'error', mensaje: error.message, tiempo: 6000})
        console.warn(error)
      }
    },

  },
  plugins: [vuexPersist.plugin],
  modules: {
  }
})
