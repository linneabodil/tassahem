import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animal: {},
    animals: [],
    loggedInUser: "",
    authOptions: {
      params: {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("authentic")}`
        }
      }
    },
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
    },
    removeLoggedInUser(state) {
      state.loggedInUser = "";
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
    async editAnimal(ctx, animal) {
      await axios.put('http://localhost:3000/animals/', animal)
      ctx.dispatch('getAllAnimals')
    },
    // users
    async signUp(ctx, userInfo) {
      await axios.post('http://localhost:3000/users', userInfo);
    },
    async login(ctx, userInfo) {
      try {
        let verify = await axios.post('http://localhost:3000/verify', userInfo);
        ctx.commit('setLoggedInUser', verify.data.username)
        sessionStorage.setItem("authentic", verify.data.authToken)
      }
      catch (err) {
        alert(err)
      }
    },
    async logout(ctx) {
      try {
        ctx.commit('removeLoggedInUser', '')
        sessionStorage.clear()
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
    getAnimalById(state){
      return (id) => {
        return state.animals.filter(
          animal => animal._id == id
        )[0]
      }
    },
    getLoggedInUser(state){
      return state.loggedInUser;
    }
  }
})
