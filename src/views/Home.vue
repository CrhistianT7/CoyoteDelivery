<script setup>
import { ref, onMounted } from 'vue'

import Hero from '../components/Hero.vue';
import Restaurants from '../components/Restaurants.vue';
import Categories from '../components/Categories.vue';
import { db } from '../data/restaurantes'

const restaurantes = ref([])

onMounted(() => {
  restaurantes.value = db
})

</script>

<template>
  <section class="main">
    <Hero />
  </section>
  <Categories />
  <section>
    <div class="restaurantes">
      <Restaurants v-for="restaurante in restaurantes" :restaurante="restaurante" :key="restaurante.id"/>
    </div>
  </section>
</template>

<style scoped>
.main {
  height: 100vh;
}

.restaurantes {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
</style>
