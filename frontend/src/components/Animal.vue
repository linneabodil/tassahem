<template>
  <li class="animal" @click="selectAnimal(animal)">
    <img class="animal__img" :src="animal.img" alt="Bild på djuret som söker hem.">
    <div class="animal__text-container" :class="animal.category">
      <h2 class="animal__name">{{ animal.name }}, {{ animal.born.slice(0,10) }}</h2>
      <div class="animal__icons">
        <img :src="require('../assets/' + animal.category + '.svg')" alt="">
        <img :src="require('../assets/' + animal.gender + '.svg')" alt="">
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Animal',
  props: ['animal'],
  methods: {
    selectAnimal(animal) {
      this.$store.commit('selectAnimal', animal);
      this.$router.push('/animalcard');
    }
  }
}
</script>
