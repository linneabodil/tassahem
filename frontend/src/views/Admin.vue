<template>
  <div class="admin">
    <a href="btn-logout" @click="logout()">Logga ut</a>
    <main>
      <div class="section">
        <a class="addAnimal btn" href="#" @click="toggleAddAnimal()">Lägg till djur</a>
        <div class="seeking">
          <h2 class="page-heading">Söker hem</h2>
          <AnimalListAdmin v-if="!addAnimal" :animals="seeking" />
        </div>
      </div>
      <div class="section found">
        <h2 class="page-heading">Har tassat hem</h2>
        <AnimalListAdmin v-if="!addAnimal" :animals="found" />
      </div>
    </main>
    <AnimalAdd v-if="addAnimal" />
  </div>
</template>

<script>

import AnimalListAdmin from '../components/AnimalListAdmin.vue'
import AnimalAdd from '../components/AnimalAdd.vue';

export default {
  name: 'admin',
  data() {
    return {
      addAnimal: false
    }
  },
  components: {
    AnimalListAdmin,
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
