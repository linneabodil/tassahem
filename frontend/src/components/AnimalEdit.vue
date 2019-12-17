<template>
  <main class="animalEdit">
    <h3>Redigera Djur</h3>
    <section>
      <section>
        <label>Namn</label>
        <input type="text" placeholder="namn" v-model="animal.name">
      </section>
      <section>
        <label>Födelseår</label>
        <input type="text" placeholder="xxxx-xx-xx" v-model="animal.born">
      </section>
      <br>
        <label>Typ:</label>
        <input type="radio" id="cat" value="cat" v-model="animal.category">
        <label for="female">Katt</label>
        <input type="radio" id="dag" value="dog" v-model="animal.category">
        <label for="male">Hund</label>
      <br>
      </section>
      <section>
      <label>Kön:</label>
        <input type="radio" id="female" value="female" v-model="animal.gender">
        <label for="female">Tjej</label>
        <input type="radio" id="male" value="male" v-model="animal.gender">
        <label for="male">Kille</label>
      <br>
      </section>
      <section>
        <label>Beskrivning</label>
        <input type="text" placeholder="beskrivning" v-model="animal.description">
      </section>
      <select v-model="animal.needs" multiple>
      <option>Utevistelse</option>
      <option>Hem utan barn</option>
      <option>Kattkompis</option>
      <option>Hundkompis</option>
      </select>
      <h1>Fokus på denna sektionen</h1>
      <label>Status:</label>
      <select v-model="animal.status">
        <option value="seeking">Söker hem</option>
        <option value="found">Hittat hem</option>
      </select>
    <section>
      <a href="#" class="btn-edit" @click="editAnimal">Spara</a>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AnimalEdit',
  computed: {
    animal() {
      return this.$store.getters.getAnimalById(
        this.$route.params.id
      )
    }
  },
  methods: {
    editAnimal() {
      this.$store.dispatch('editAnimal', this.animal)
      this.$router.push('/animalcard')
    }
  }
}
</script>

<style>

</style>
