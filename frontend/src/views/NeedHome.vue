<template>
  <div class="need-home">
    <h2 class="page-heading">Husdjur utan hus</h2>
    <AnimalList :animals="animals" />
  </div>
</template>

<script>
import AnimalList from '@/components/AnimalList.vue'

export default {
  name: 'need-home',
  components: {
    AnimalList
  },
  computed: {
    animals() {
      let animals = this.$store.getters.getAnimals;
      let seekingAnimals = animals.filter(animal => animal.status == "seeking")
      return seekingAnimals;
    }
  }
}

</script>
