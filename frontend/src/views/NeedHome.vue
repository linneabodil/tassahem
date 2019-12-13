<template>
  <div class="need-home">
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
  computed:{
    animals() {
      let animals = this.$store.getters.getAnimals;
      return animals;
    }
  }
}

</script>
