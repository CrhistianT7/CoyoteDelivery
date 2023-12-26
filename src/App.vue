<script setup>
import { ref } from 'vue'

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const carrito = ref([])
const agregarCarrito = (plato) => {
  console.log(plato)
  carrito.value.push(plato)
  console.log('se agrego carrito')
}
</script>

<template>
  <Header :carrito="carrito"/>
  <RouterView :carrito="carrito" @agregar-carrito="agregarCarrito"/>
  <Footer />
</template>
