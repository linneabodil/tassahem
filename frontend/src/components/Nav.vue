<template>
  <nav>
    <router-link to="/"><img src="../assets/img/logo-mobile.svg" class="logo"></router-link>
    <div id="menuToggle">
      <input type="checkbox" id="theBox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu" v-on:click="closeMenu">
        <li>
          <router-link to="/"><h1 style="color: #F59039;">Start</h1></router-link>
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
  </nav>
</template>

<script>
export default {
  name: 'Nav',

  methods: {
    closeMenu: function (){
      document.getElementById("theBox").checked = false;
    }
  }
} 

</script>

<style lang="scss">

</style>
