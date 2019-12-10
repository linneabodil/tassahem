<template>
  <li class="animal">
    <img class="animal__img" src="https://images.unsplash.com/photo-1516374348294-ce51573b0fb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Bild på djuret som söker hem.">
    <div class="animal__text-container">
      <h2 class="animal__name">{{ animal.name }}</h2>
      <div class="animal__icons">
        
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
  margin: 0;
  width: 100%;
  list-style: none;

  &__img {
  }

  &__text-container {
    padding: .5rem 1rem;
    background: #4B8E8D;
  }
}

</style>
