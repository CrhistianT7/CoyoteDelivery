<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  restaurante: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="restaurant-info">
    <img :src="'/src/assets/restaurantes/' + restaurante?.imagen" class="restaurant-img" :alt="'restaurante imagen'">
    <span>{{ restaurante?.nombre }}</span>
    <div>
      <RouterLink :to="`/restaurante/${restaurante.id}`">Visitar restaurante</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.restaurant-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.restaurant-info{
  color: #000;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 6px;
  align-items: center;
}
</style>
