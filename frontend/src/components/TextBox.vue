<template>
  <div class="petrolBox">
    <h1>{{ rubrik }}</h1>
    <p>
      {{ info }}
    </p>
    <button class="more"><h2>Läs Mer</h2></button>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    rubrik: String,
    info: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$petrol: #4B8E8D;
$pink: #C3377E;
$orange: #F59039; 
  .petrolBox{
    background: $petrol;
    text-align: center;
    padding: 2rem;

    p, h1,h2{
      color: white;
    }

    h1{
      font-family: Bebas Neue;
      font-size: 36px;
    }

    h2{
      font-family: Bebas Neue;
      font-size: 24px;
    }

    p{
      font-family: Noto Serif;
    }

    button{
      background: black;
      width: 11rem;
      margin-top: 2rem;

      h2{
        margin: .4rem;
      }
    }
  }
</style>