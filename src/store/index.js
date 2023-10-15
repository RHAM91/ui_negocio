import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'rhomio',
  storage: window.localStorage,
  reducer: state => ({
  }) 
})



export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  plugins: [vuexPersist.plugin],
  modules: {
  }
})
