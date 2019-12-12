<template>
  <div id="nav">
    <router-link to="/"><img src="../assets/img/logo-mobile.svg"></router-link>
      <ul>
        <li>
          <router-link to="/">Start</router-link>
        </li>
        <li>
          <router-link to="/soker-hem">Söker hem</router-link>
        </li>
        <li>
          <router-link to="/hittat-hem">Hittat hem</router-link>
        </li>
        <li>
          <router-link to="/information">Senare problem</router-link>
        </li>
        <li>
          <router-link to="/kontakt">Kontakt</router-link>
        </li>
        <li>
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <router-link to="/logga-in">Logga in</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss">
  ul {
    list-style-type: none;
  }
</style>
