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
        {name: 'Bonnie',
        age: '11 månader',
        category: 'dog',
        gender: 'female',
        img: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'},
        {name: 'Rutti', age: '2 år', category: 'cat', gender: 'female',
        img: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80'},
        {name: 'Stells', age: '1 år', category: 'cat', gender: 'female'}
      ]
    }
  }
}
</script>

<style lang="scss">

.animal-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: .5rem;
}

</style>
