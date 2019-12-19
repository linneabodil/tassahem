<template>
  <aside class="animalcard">
    <img class="__photo" :src="animal.img" alt="Bild på djur">
    <div class="__section">
      <h2 :class="animal.category">
        {{ animal.name }}
        <img :src="require('../assets/' + animal.category + '-black.svg')" alt>
        <img :src="require('../assets/' + animal.gender + '-black.svg')" alt>
      </h2>
      <div class="animal__text" :class="animal.category"></div>
      <p>Född {{ animal.born.slice(0,10) }}</p>
      <p>{{ animal.breed }}</p>
      <p>{{ animal.description }}</p>
      <div class="needs__opt">
        <p v-for="(need, index) in animal.needs" :key="index">{{need}}</p>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AnimalCard",
  props: ["animalcard"],
  computed: {
    animal() {
      return this.$store.state.animal;
    }
  }
};
</script>
