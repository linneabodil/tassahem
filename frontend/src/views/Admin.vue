<template>
  <div class="addAnimal">
    <h1>Lägg in djur</h1>
    <label>Namn:</label>
    <input type="text" placeholder="Namn" v-model="newAnimal.name">
    <label>Födelseår:</label>
    <input type="date" placeholder="xxxx-xx-xx" v-model="newAnimal.born">
    <label>Ras:</label>
    <input type="text" placeholder="Ras" v-model="newAnimal.breed">
    <br>
    <label>Typ:</label>
    <input type="radio" id="cat" value="cat" v-model="newAnimal.category">
    <label for="female">Katt</label>
    <input type="radio" id="dag" value="dog" v-model="newAnimal.category">
    <label for="male">Hund</label>
    <br>
    <label>Kön:</label>
    <input type="radio" id="female" value="female" v-model="newAnimal.gender">
    <label for="female">Tjej</label>
    <input type="radio" id="male" value="male" v-model="newAnimal.gender">
    <label for="male">Kille</label>
    <br>
    <label>Beskrivning:</label>
    <textarea type="text" placeholder="Beskrivning" v-model="newAnimal.description"></textarea>
    <label>Behov:</label>
    <select v-model="newAnimal.needs" multiple>
      <option>Utevistelse</option>
      <option>Hem utan barn</option>
      <option>Kattkompis</option>
      <option>Hundkompis</option>
    </select>
    <label>Status:</label>
    <select v-model="newAnimal.status">
      <option value="seeking">Söker hem</option>
      <option value="found">Hittat hem</option>
    </select>
    <label>img</label>
    <input type="text" placeholder="img" v-model="newAnimal.img">
    <section>
      <a href="#" class="btn-add" @click="createAnimal">Spara</a>
      <a href="#" class="btn-cancel" @click="cancelNewAnimal">Avbryt</a>
    </section>
  </div>
</template>

<script>

export default {
  name: 'admin',
  data () {
    return {
      newAnimal: {
        name: '',
        born: '',
        breed: '',
        category: '',
        gender: '',
        description: '',
        needs: [], 
        status: '',
        img: ''
      }
    }
  }, 
  methods: {
      async createAnimal(){
        await this.$store.dispatch('createAnimal', this.newAnimal)
        await this.$store.dispatch('getAllAnimals');
        this.clearInput();
    },
    clearInput(){
      this.newAnimal.name ='',
      this.newAnimal.born ='',
      this.newAnimal.breed ='',
      this.newAnimal.category ='',
      this.newAnimal.gender ='',
      this.newAnimal.description =''
      this.newAnimal.needs =[]
      this.newAnimal.status =''
      this.newAnimal.img = ''
    },
    cancelNewAnimal() {
      this.clearInput();
    }
  }
}

</script>