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
  <div>
    <img :src="'/src/assets/restaurantes/' + restaurante?.imagen" class="restaurant-img" :alt="'restaurante imagen'">
    {{ restaurante?.nombre }}
    <div>
      <RouterLink :to="`/restaurante/${restaurante.id}`">Visitar restaurante</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.restaurant-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
