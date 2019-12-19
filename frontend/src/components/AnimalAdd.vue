<template>
  <div class="addAnimal">
    <section>
      <img class="__photo" alt="Bild på djur" src="../assets/img/dogwalker.jpg">
    </section>
    <div class="__container">
      <h2>Skapa djur</h2>
      <section>
        <label>Namn:</label>
        <input type="text" placeholder="Djurets namn" v-model="newAnimal.name">
      </section>
      <section>
        <label>Födelseår:</label>
        <input type="text" placeholder="xxxx-xx-xx" v-model="newAnimal.born">
      </section>
      <section>
        <label>Ras:</label>
        <input type="text" placeholder="Ras" v-model="newAnimal.breed">
      </section>
      <section class="__radio">
        <label>Typ:</label>
        <input type="radio" id="cat" value="cat" v-model="newAnimal.category">
        <label for="female">Katt</label>
        <input type="radio" id="dag" value="dog" v-model="newAnimal.category">
        <label for="male">Hund</label>
      </section>
      <section class="__radio">
        <label>Kön:</label>
        <input type="radio" id="female" value="female" v-model="newAnimal.gender">
        <label for="female">Tjej</label>
        <input type="radio" id="male" value="male" v-model="newAnimal.gender">
        <label for="male">Kille</label>
      </section>
      <section class="__input">
        <label>Beskrivning:</label>
        <textarea placeholder="Beskriv djurets personlighet..." v-model="newAnimal.description"/>
      </section>
      <section class="__input">
        <label>Behov:</label>
        <select v-model="newAnimal.needs" multiple>
          <option>Utevistelse</option>
          <option>Hem utan barn</option>
          <option>Kattkompis</option>
          <option>Hundkompis</option>
        </select>
      </section>
      <div class="__change">
        <h3>Status:</h3>
        <select v-model="newAnimal.status">
          <option value="seeking">Söker hem</option>
          <option value="found">Hittat hem</option>
        </select>
      </div>
      <section>
        <label>Bild:</label>
        <input type="text" placeholder="bildlänk..." v-model="newAnimal.img">
      </section>
    </div>
    <section class="__btn-action">
      <a href="#" class="btn btn-animal" @click="createAnimal">Spara</a>
      <a href="#" class="btn btn-animal" @click="cancelNewAnimal">Avbryt</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "AnimalAdd",
  data() {
    return {
      newAnimal: {
        name: "",
        born: "",
        breed: "",
        category: "",
        gender: "",
        description: "",
        needs: [],
        status: "",
        img: ""
      }
    };
  },
  methods: {
    async createAnimal() {
      await this.$store.dispatch("createAnimal", this.newAnimal);
      await this.$store.dispatch("getAllAnimals");
      this.clearInput();
    },
    clearInput() {
      this.newAnimal.name = "";
      this.newAnimal.born = "";
      this.newAnimal.breed = "";
      this.newAnimal.category = "";
      this.newAnimal.gender = "";
      this.newAnimal.description = "";
      this.newAnimal.needs = [];
      this.newAnimal.status = "";
      this.newAnimal.img = "";
    },
    cancelNewAnimal() {
      this.clearInput();
    }
  }
};
</script>
