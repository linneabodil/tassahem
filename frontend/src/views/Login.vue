<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <section class="signIn">
      <h1>Logga in</h1>
      <input v-model="username" type="text" placeholder="Användarnamn">
      <input v-model="password" type="password" placeholder="Lösenord">
    </section>
    <a href="#" class="btn">Logga in</a>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      username: "",
      password: "",
    };
  },
    methods: {
      }
    }

</script>
