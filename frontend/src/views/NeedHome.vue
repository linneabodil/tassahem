<template>
  <div class="home">
    {{ animals }}
  </div>
</template>

<script>

export default {
  name: 'need-home',
  computed:{
    animals(){
      let animals = this.$store.getters.getAnimals;
      return animals;
    }
  }
}

</script>
