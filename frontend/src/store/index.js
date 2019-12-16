import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animal: {},
    animals: [],
    loggedInUser: ""
  },
  mutations: {
    selectAnimal(state, animal) {
      state.animal = animal;
    },
    setAnimals(state, animals) {
      state.animals = animals;
    },
    setLoggedInUser(state, user) {
      state.loggedInUser = user;
    }
  },
  actions: {
    // animals
    async getAllAnimals(ctx){
      let animals = await axios.get('http://localhost:3000/animals')
      await ctx.commit('setAnimals', animals.data);
    },
    async createAnimal(ctx, animal) {
      await axios.post('http://localhost:3000/animals', animal);
    },
    // users
    async signUp(ctx, userInfo) {
      await axios.post('http://localhost:3000/users', userInfo);
    },
    async login(ctx, userInfo) {
      try {
        let verify = await axios.post('http://localhost:3000/verify', userInfo);
        ctx.commit('setLoggedInUser', verify.data.username)
      }
      catch (err) {
        alert(err)
      }
    }
  },
  modules: {
  },
  getters: {
    getAnimals(state){
      return state.animals;
    },
    getLoggedInUser(state){
      return state.loggedInUser;
    }
  }
})
