<template>
  <div class="box">
    <h1>{{ rubrik }}</h1>
    <p>
      {{ info }}
    </p>
    <router-link :to="'/' + btn">
      <button class="more"><h2>Läs Mer</h2></button>
    </router-link> 
  </div>
</template>


<script>
export default {
  name: 'TextBox',
  props: {
    rubrik: String,
    info: String,
    btn: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>