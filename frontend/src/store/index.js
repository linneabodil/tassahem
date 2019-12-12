import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: []
  },
  mutations: {
    setAnimals(state, animals) {
      state.animals = animals;
    }
  },
  actions: {
    async getAllAnimals(ctx){
      let animals = await axios.get('http://localhost:3000/animals')
      await ctx.commit('setAnimals', animals.data);
    }
  },
  modules: {
  },
  getters: {
    getAnimals(state){
      return state.animals;
    }
  }
})
