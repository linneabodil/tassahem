<template>
  <div class="box">
    <h1>{{ rubrik }}</h1>
    <p>
      {{ info }}
    </p> 
  </div>
</template>


<script>
export default {
  name: 'NoButtonTextBox',
  props: {
    rubrik: String,
    info: String,
    btn: String
  }
}
</script>

<style scoped lang="scss">

</style>