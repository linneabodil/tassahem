<template>
  <ul class="animal-list-admin">
    <AnimalAdmin v-for="(animal, index) in animals" :key="index" :animal="animal" />
  </ul>
</template>

<script>
import AnimalAdmin from './AnimalAdmin.vue'

export default {
  name: 'AnimalListAdmin',
  props: ['animals'],
  components: {
    AnimalAdmin
  }
}
</script>
