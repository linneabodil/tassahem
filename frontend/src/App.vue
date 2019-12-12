<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    beforeMount(){
      this.$store.dispatch('getAllAnimals')
    }
  }
</script>

<style lang="scss">

</style>
