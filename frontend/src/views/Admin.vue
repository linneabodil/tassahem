<template>
  <div class="admin">
    <a class="btn btn-black" @click="logout()">Logga ut</a>
    <a class="btn btn-black" v-if="addAnimal" @click="exitAdd()">Avbryt</a>
    <main>
      <div class="section" v-if="!addAnimal">
        <a class="btn-add btn" href="#" @click="toggleAddAnimal()">Lägg till djur</a>
        <div class="seeking">
          <h2 class="page-heading">Söker hem</h2>
          <AnimalListAdmin :animals="seeking" />
        </div>
      </div>
      <div class="section found" v-if="!addAnimal">
        <h2 class="page-heading">Har tassat hem</h2>
        <AnimalListAdmin :animals="found" />
      </div>
    </main>
    <AnimalAdd class="animal-add" v-if="addAnimal" />
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
      this.$router.push("/logga-in");
    },
    toggleAddAnimal() {
      this.addAnimal = !this.addAnimal;
    },
    exitAdd() {
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
