<template>
  <li class="animal">
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
  props: ['animal']
}
</script>

<style lang="scss">
.animal {
  height: 300px;
  list-style: none;

  &__img {
    width: 100%;
  }

  &__text-container {
    margin-top: -4px;
    padding: .5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.dog {
      background: #4B8E8D;
    }
    &.cat {
      background: #C3377E;
    }

    .animal__name {
      font-family: 'Bebas Neue';
      letter-spacing: 2px;
      color: White;
    }

    .animal__icons {
      display: block;

      img {
        margin: 5px;
      }
    }
  }
}
</style>
