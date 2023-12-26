<script setup>
  const props = defineProps({
    restaurante: {
      type: Object,
      required: true
    }
  })

</script>

<template>
  <div>
    <img :src="'/src/assets/' + restaurante.imagen" class="restaurant-img" alt="restaurante imagen">
    {{ restaurante.nombre }}
    <div>
      <a>Visitar restaurante</a>
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
