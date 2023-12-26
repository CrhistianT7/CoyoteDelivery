<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '../data/restaurantes'
import PlatoCard from '../components/PlatoCard.vue';

const props = defineProps({
  carrito: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['agregar-carrito'])

const selectedRestaurant = ref({})
const route = useRoute()

onMounted(() => {
  const result = db.filter(x => x.id == route.params.id)
  selectedRestaurant.value = result[0]
})

const agregarCarrito = (plato) => {
  const platoConRestaurante = { restaurante: db.filter(x => x.id == route.params.id)[0]?.nombre, ...plato }
  emit('agregar-carrito', platoConRestaurante)
}
</script>

<template>
  <h1> Restaurant Details {{ $route.params.id }}</h1>
  <div class="platos">
    {{ selectedRestaurant?.nombre }}
    <PlatoCard v-for="plato in selectedRestaurant.platos" :plato="plato" @agregar-carrito="agregarCarrito" />
    <button @click="$router.back()">Ir a la pagina de inicio</button>
  </div>
</template>

<style scoped>
.platos {
  min-height: calc(100vh - 56px);
}
</style>
