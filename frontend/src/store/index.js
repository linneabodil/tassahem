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
    },
    async editAnimal(ctx, animal) {
      await axios.put('http://localhost:3000/animals/', animal)
      ctx.dispatch('getAllAnimals')
    }
  },
  modules: {
  },
  getters: {
    getAnimals(state){
      return state.animals;
    },
    getAnimalById(state){
      return (id) => {
        return state.animals.filter(
          animal => animal._id == id
        )[0]
      }
    }
  }
})
