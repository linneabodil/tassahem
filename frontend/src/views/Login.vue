<template>
  <div class="login-page">
    <div class="input-fields">
      <section class="section login">
        <h2>Logga in</h2>
        <label for="username">Användarnamn: </label>
        <input name="username" v-model="username" type="text">
        <label for="password"> Lösenord: </label>
        <input name="password" v-model="password" type="password" v-on:keyup.enter="login">
      </section>
      <a href="#" class="btn" @click="login()">Tassa in</a>

      <section class="section signup">
        <h2>Skapa konto</h2>
        <label for="newUsername">Användarnamn: </label>
        <input name="newUsername" v-model="newUsername" type="text">
        <label for="newPassword"> Lösenord: </label>
        <input name="newPassword" v-model="newPassword" type="password">
      </section>
      <a href="#" class="btn" @click="signUp()">Skapa konto</a>
    </div>

    <div class="img-field">
      <img src="../assets/img/login.jpg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      inCorrec: false
    }
  },
  methods: {
    async login() {
      if (this.username && this.password) {
        await this.$store.dispatch('login', {username: this.username, password: this.password});
        this.$router.push('/admin')
      }
    },
    async signUp() {
      if (this.newUsername && this.newPassword) {
        await this.$store.dispatch('signUp', {username: this.newUsername, password: this.newPassword});
      }
    }
  }
}

</script>
