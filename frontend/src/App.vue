<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link> |
      <router-link to="/soker-hem">Söker hem</router-link> |
      <router-link to="/hittat-hem">Hittat hem</router-link> |
      <router-link to="/information">Senare problem</router-link> |
      <router-link to="/kontakt">Kontakt</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/logga-in">Logga in</router-link>
    </div>
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
