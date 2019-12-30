<template>
  <div class="home">
  <img class="picture" alt="Wolf Dog" src="../assets/img/poodle.jpg">
    <NoButtonTextBox style="float: right;"
    rubrik="Att tassa hem"
    info="Nulla neque est a, lectus sociis natoque vestibulum.
    Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant.
    Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim
    condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
    Nulla neque est a, lectus sociis natoque vestibulum.
    Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant.
    Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim
    condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."/>

    <NoButtonTextBox class="white" style="background: #fff; color:black;"
    rubrik="Förbered intassning"
    info="Nulla neque est a, lectus sociis natoque vestibulum.
    Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant.
    Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim."/>

    <NoButtonTextBox style="background: #C3377E; float: left;"
    rubrik="Efter att ditt djur har hittat hem"
    info="Nulla neque est a, lectus sociis natoque vestibulum.
    Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant.
    Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim
    condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae.
    Nulla neque est a, lectus sociis natoque vestibulum.
    Nulla pharetra vivamus feugiat quis venenatis, habitasse habitant.
    Amet sit nunc libero libero. Elementum sed nullam proin dui, viverra enim
    condimentum id commodo. Vitae vel purus volutpat dolor, arcu vitae."/>
    <img class="picture" alt="Wolf Dog" src="../assets/img/happy-dog.jpg" style="float: right;">
    </div>
</template>

<script>
import NoButtonTextBox from '@/components/NoButtonTextBox.vue'
export default {
  name: 'information',
  components: {
    NoButtonTextBox
  }
}

</script>

<style scoped lang="scss">

</style>
