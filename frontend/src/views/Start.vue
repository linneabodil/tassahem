<template>
  <div class="page">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <picture>
      <img id="hero" alt="Dogs" src="../assets/img/hero.jpg">
    </picture>

    <TextBox 
      rubrik="rubrik" 
      info="Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
      Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."/>
      <img class="picture" alt="Wolf Dog" src="../assets/img/dog-wolf.jpg">

      <TextBox 
      rubrik="rubrik 2" 
      info="Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
      Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."/>

      <img class="picture" alt="Children and dog" src="../assets/img/children-dog.jpg">

      <TextBox 
      rubrik="rubrik 3" 
      info="Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
      Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."/>

      <img class="picture" alt="Dog walker" src="../assets/img/dogwalker.jpg">

      <TextBox 
      rubrik="rubrik 4" 
      info="Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
      Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."/>

      <img class="picture" alt="Hand reaching for cat" src="../assets/img/cat-hand.jpg">
  </div>

</template>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TextBox from '@/components/TextBox.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TextBox
  }
}
</script>

<style scoped lang="scss">

#hero {
  height: 90vh;
  width: 100%;
}
.picture{
  height: 400px;
  width: 100%;
}

</style>
