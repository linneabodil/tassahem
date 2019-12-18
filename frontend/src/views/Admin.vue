<template>
  <div class="admin">
    <AnimalAdd />
    <a href="btn" @click="logout()">Logga ut</a>
  </div>
</template>

<script>

import AnimalAdd from '../components/AnimalAdd.vue';

export default {
  name: 'admin',
  components: {
    AnimalAdd
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      alert("utloggad..?")
    }
  }
}

</script>
