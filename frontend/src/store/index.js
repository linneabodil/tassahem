import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animal: {},
    animals: []
  },
  mutations: {
    selectAnimal(state, animal) {
      state.animal = animal;
    },
    setAnimals(state, animals) {
      state.animals = animals;
    }
  },
  actions: {
    async getAllAnimals(ctx){
      let animals = await axios.get('http://localhost:3000/animals')
      await ctx.commit('setAnimals', animals.data);
    },
    async createAnimal(ctx, animal) {
      await axios.post('http://localhost:3000/animals', animal);
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
