<template>
  <div class="admin">
    <a href="#" @click="toggleAddAnimal()">Lägg till djur</a>
    <AnimalAdd v-if="addAnimal" class="add" />
    <AnimalList class="seeking" :animals="seeking" />
    <AnimalList class="found" :animals="found" />
    <a href="btn" @click="logout()">Logga ut</a>

  </div>
</template>

<script>

import AnimalList from '../components/AnimalList.vue'
import AnimalAdd from '../components/AnimalAdd.vue';

export default {
  name: 'admin',
  data() {
    return {
      addAnimal: false
    }
  },
  components: {
    AnimalList,
    AnimalAdd
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
    toggleAddAnimal() {
      this.addAnimal = !this.addAnimal;
    }
  },
  computed: {
    seeking() {
      let animals = this.$store.getters.getAnimals;
      animals = animals.filter(animal => animal.status == "seeking")
      return animals;
    },
    found() {
      let animals = this.$store.getters.getAnimals;
      animals = animals.filter(animal => animal.status == "found")
      return animals;
    }
  }
}

</script>
