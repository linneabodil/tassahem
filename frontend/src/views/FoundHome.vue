<template>
  <div class="found-home">
    <h2 class="page-heading">Husdjur med hus</h2>
    <AnimalList :animals="animals" />
  </div>
</template>

<script>
import AnimalList from '@/components/AnimalList.vue'

export default {
  name: 'found-home',
  components: {
    AnimalList
  },
  computed: {
    animals() {
      let animals = this.$store.getters.getAnimals;
      let seekingAnimals = animals.filter(animal => animal.status == "found")
      return seekingAnimals;
    }
  }
}

</script>
