<template>
  <li class="animal-admin">
    <img class="image" :src="animal.img" alt="Bild på djuret som söker hem">
    <div class="text-area">
      <h2 class="name">{{ animal.name }}</h2>
      <p class="btn btn-animal" @click="$router.push(`/AnimalEdit/${animal._id}`)">Redigera</p>
    </div>
  </li>
</template>
i
<script>
export default {
  name: 'AnimalAdmin',
  props: ['animal']
}
</script>
