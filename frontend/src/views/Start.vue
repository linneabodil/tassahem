<template>
  <div class="page">
    <picture>
      <img id="hero" alt="Dogs" src="../assets/img/hero.jpg">
    </picture>

    <TextBox 
      rubrik="Vilka är vi?" 
      info="Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
      Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."
      btn="information"/>
      
      <img class="picture" alt="Wolf Dog" src="../assets/img/dog-wolf.jpg">

      <TextBox style="font-color: black; background-color: white;"
      rubrik="Dom fyrbenta vännerna" 
      info="Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
      Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."
      btn="soker-hem"
      />

      <img class="picture" alt="Children and dog" src="../assets/img/children-dog.jpg">

      <TextBox 
      rubrik="Vill du låta någon tassa hem till dig?" 
      info="Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
      Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."
      btn="kontakt"
      />

      <img class="picture" alt="Dog walker" src="../assets/img/dogwalker.jpg">

      <TextBox style="color: black; background-color: white;" 
      rubrik="Våra solskenshistorier" 
      info="Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
      Nulla neque est a, lectus sociis natoque vestibulum. 
      Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant. 
      Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim 
      condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."
      btn="hittat-hem"
      />

      <img class="picture" alt="Hand reaching for cat" src="../assets/img/cat-hand.jpg">
  </div>

</template>



<script>
// @ is an alias to /src
import TextBox from '@/components/TextBox.vue'

export default {
  name: 'home',
  components: {
    TextBox
  }
} 
</script>

<style scoped lang="scss">

#hero {
  height: 90vh;
  width: 100%;
  object-fit: cover;  
}
.picture{
  height: 400px;
  width: 100%;
  object-fit: cover;
}

</style>
