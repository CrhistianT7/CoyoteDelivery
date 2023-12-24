<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Restaurant from './components/Restaurant.vue'
import Categories from './components/Categories.vue';

import { ref, onMounted } from 'vue'
import { db } from './data/restaurantes'

const carrito = ref([])
const restaurantes = ref([])

onMounted(() => {
  restaurantes.value = db
})

</script>

<template>
  <section class="main">
    <Header />
    <Hero />
  </section>
  <Categories />
  <section>
    <div class="restaurantes">
      <Restaurant v-for="restaurante in restaurantes" :restaurante="restaurante" />
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.main {
  height: 100vh;
}

.restaurantes {
  display: flex;
  flex-wrap: wrap;
}
</style>
