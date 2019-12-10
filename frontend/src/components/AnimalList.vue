<template>
  <ul class="animal-list">
    <Animal v-for="(animal, index) in animals" :key="index" :animal="animal" />
  </ul>
</template>

<script>
import Animal from './Animal.vue'

export default {
  name: 'AnimalList',
  components: {
    Animal
  },
  data() {
    return {
      animals: [
        {name: 'Bonnie', age: '11 månader'},
        {name: 'Rutti', age: '2 år'}
      ]
    }
  }
}
</script>

<style lang="scss">

.animal-list {
  display: grid;
  grid-template-columns: 1fr, 3;
}

</style>
