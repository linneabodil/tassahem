<template>
    <aside>
    <img class="animal__photo" :src="animal.img" alt="Bild på djur">
    <div class="animal__card">
      <h2>{{ animal.name }}
        <img :src="require('../assets/' + animal.category + '.svg')" alt="">
        <img :src="require('../assets/' + animal.gender + '.svg')" alt="">
      </h2>
      <div class="animal__text" :class="animal.category"></div>
      <p>Född {{ animal.born.slice(0,10) }}</p>
      <p>{{ animal.breed }}</p>
      <p>{{ animal.description }}</p>
      <p>Behov:</p><p class="needs__opt">{{ animal.needs.toString() }}</p>
    </div>
    </aside>
</template>

<script>

export default {
  name: 'AnimalCard',
  props: ['animalcard'],
  computed: {
    animal() {
      return this.$store.state.animal;
    }
  }
}
</script>

<style scoped lang="scss">

.animal__photo {
  min-width: 3rem;
}
.animal {

  &__card {
    margin: 50px;

  &__text {
    &.dog {
      color: #4B8E8D;
    }
    &.cat {
      color: #C3377E;
    }
  }
  img {
    background-color: black;
  }

  .needs__opt {
    background: peachpuff;
    padding: .5rem;   
  }
}
}
</style>

