<template>
  <main class="animaledit">
    <section>
      <img class="__photo" :src="animal.img" alt="Bild på djur">
    </section>
    <div class="__container">
      <h2>Redigera Djur</h2>
      <section>
        <label>Namn:</label>
        <input type="text" placeholder="namn" v-model="animal.name">
      </section>
      <section>
        <label>Födelseår:</label>
        <input type="text" placeholder="xxxx-xx-xx" v-model="animal.born">
      </section>
      <section>
        <label>Ras:</label>
        <input type="text" placeholder="Ras" v-model="animal.breed">
      </section>
      <section class="__radio">
        <label>Typ:</label>
        <input type="radio" id="cat" value="cat" v-model="animal.category">
        <label for="female">Katt</label>
        <input type="radio" id="dag" value="dog" v-model="animal.category">
        <label for="male">Hund</label>
      </section>
      <section class="__radio">
        <label>Kön:</label>
        <input type="radio" id="female" value="female" v-model="animal.gender">
        <label for="female">Tjej</label>
        <input type="radio" id="male" value="male" v-model="animal.gender">
        <label for="male">Kille</label>
      </section>
      <section class="__input">
        <label>Beskrivning:</label>
        <textarea placeholder="beskrivning" v-model="animal.description"/>
      </section>
      <section class="__input">
        <label>Behov:</label>
        <select v-model="animal.needs" multiple>
          <option>Utevistelse</option>
          <option>Hem utan barn</option>
          <option>Kattkompis</option>
          <option>Hundkompis</option>
        </select>
      </section>
      <div class="__change">
        <h3>Ändra djurets status!</h3>
        <select v-model="animal.status">
          <option value="seeking">Söker hem</option>
          <option value="found">Hittat hem</option>
        </select>
      </div>
    </div>
    <section class="__btn-action">
      <a href="#" class="btn btn-animal" @click="editAnimal">Spara</a>
      <!-- <a href="#" class="btn-animal" @click="cancelNewAnimal">Avbryt</a> -->
    </section>
  </main>
</template>

<script>
export default {
  name: "AnimalEdit",
  computed: {
    animal() {
      return this.$store.getters.getAnimalById(this.$route.params.id);
    }
  },
  methods: {
    editAnimal() {
      this.$store.dispatch("editAnimal", this.animal);
      this.$router.push("/");
    },
    clearInput() {
      this.animal.name = "";
      this.animal.born = "";
      this.animal.breed = "";
      this.animal.category = "";
      this.animal.gender = "";
      this.animal.description = "";
      this.animal.needs = [];
      this.animal.status = "";
      this.animal.img = "";
    },
    cancelNewAnimal() {
      this.clearInput();
      this.$router.push("/"); //vart ska man vilja gå?
    }
  }
};
</script>

<style>
</style>
