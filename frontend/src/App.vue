<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

  export default {
    name: 'app',
    components: {
      Nav
    },
    beforeMount(){
      this.$store.dispatch('getAllAnimals')
    }
  }
</script>

<style lang="scss">

@import './scss/main.scss';

</style>
