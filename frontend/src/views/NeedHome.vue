<template>
  <div class="need-home">
    <AnimalList />
  </div>
</template>

<script>
import AnimalList from '@/components/AnimalList.vue'

export default {
  name: 'need-home',
  computed:{
    animals(){
      let animals = this.$store.getters.getAnimals;
      return animals;
    }
  }
}

</script>
