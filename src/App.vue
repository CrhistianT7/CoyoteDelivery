<script setup>
import { ref, onMounted } from "vue"

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

const carrito = ref([])

onMounted(() => {
  const carritoStorage = localStorage.getItem('platos')
  if (carritoStorage) {
    carrito.value = JSON.parse(carritoStorage)
  }
})

const guardarLocalStorage = () => {
  localStorage.setItem('platos', JSON.stringify(carrito.value))
}

const agregarCarrito = (plato) => {
  const existe = carrito.value.findIndex(x => x.id === plato.id && x.restaurante === plato.restaurante)
  if (existe >= 0) {
    carrito.value[existe].cantidad += 1
  } else {
    plato.cantidad = 1
    carrito.value.push(plato)
  }
  guardarLocalStorage()
}

const decrementarCantidad = (id, restaurante) => {
  const index = carrito.value.findIndex(item => item.id == id && item.restaurante == restaurante)
  if (carrito.value[index].cantidad > 1) {
    carrito.value[index].cantidad -= 1
  }
  guardarLocalStorage()
}

const incrementarCantidad = (id, restaurante) => {
  const index = carrito.value.findIndex(item => item.id == id && item.restaurante == restaurante)
  carrito.value[index].cantidad += 1
  guardarLocalStorage()
}

const eliminarPlato = (id, restaurante) => {
  console.log('eliminando')
  carrito.value = carrito.value.filter(item => !(item.id == id && item.restaurante == restaurante))
  guardarLocalStorage()
}
</script>

<template>
  <div class="main">
    <Header :carrito="carrito"/>
    <RouterView :carrito="carrito" @agregar-carrito="agregarCarrito"  @incrementar-cantidad="incrementarCantidad" @decrementar-cantidad="decrementarCantidad" @eliminar-plato="eliminarPlato"/>
    <Footer />
  </div>
</template>

<style scoped>
  .main {
    max-width: 1280px;
    margin: auto;
  }
</style>
