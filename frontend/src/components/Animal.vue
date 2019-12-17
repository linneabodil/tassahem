<template>
  <li class="animal" @click="selectAnimal(animal)">
    <img class="animal__img" :src="animal.img" alt="Bild på djuret som söker hem.">
    <div class="animal__text-container" :class="animal.category">
      <div class="animal__name">
        <h2>{{ animal.name }}</h2>
        <h3>{{ animal.born.slice(0,10) }}</h3>
      </div>
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
