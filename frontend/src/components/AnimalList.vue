<template>
  <ul class="animal-list">
    <Animal v-for="(animal, index) in animals" :key="index" :animal="animal" />
  </ul>
</template>

<script>
import Animal from './Animal.vue'

export default {
  name: 'AnimalList',
  props: ['animals'],
  components: {
    Animal
  }
}
</script>
