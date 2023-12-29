<script setup>
import { computed } from "vue";
import CarritoCard from "../components/CarritoCard.vue";

const props = defineProps({
  carrito: {
    type: Array,
    required: true,
  },
})

const NUMEROTELEFONO = +51929942372

const createFullMessage = () => {
  let superMensaje = `La siguiente orden fue enviada:\n`
  
  props.carrito.forEach(item => {
    superMensaje += `
      ${item.restaurante}
      ${item.nombre}
      ${item.precio}
      ${item.cantidad}
    `
  })

  superMensaje += '\n Gracias por su pedido, será confirmado pronto pronto \n'
  return superMensaje
}

const sendToWhatsapp = () => {
  console.log("send")
  const fullMessage = createFullMessage()
  console.log(fullMessage)
  window.open(
    `https://api.whatsapp.com/send?phone=${NUMEROTELEFONO}&text=${encodeURIComponent(
      fullMessage
    )}`
  )
}
const emit = defineEmits(['incrementar-cantidad', 'decrementar-cantidad', 'eliminar-plato'])

const totalPagar = computed(() => {
  return props.carrito.reduce((total, item) => total + (item.cantidad * item.precio), 0)
})

const incrementarCantidad = (id, restaurante) => {
  emit('incrementar-cantidad', id, restaurante)
}

const decrementarCantidad = (id, restaurante) => {
  emit('decrementar-cantidad', id, restaurante)
}

const eliminarPlato = (id, restaurante) => {
  emit('eliminar-plato', id, restaurante)
}

</script>

<template>
  <div v-if="carrito.length == 0" class="full-screen">
    El carrito esta vacio
  </div>
  <div v-else class="full-screen">
    <CarritoCard v-for="carritoItem in carrito" :carrito-item="carritoItem" @incrementar-cantidad="incrementarCantidad" @decrementar-cantidad="decrementarCantidad" @eliminar-plato="eliminarPlato"/>
    <div>
      Total a pagar S/.: {{ totalPagar }}
    </div>
    <div>
      <button @click="sendToWhatsapp">Enviar Whatsapp</button>
    </div>
  </div>
</template>

<style scoped>
.full-screen {
  min-height: calc(100vh - 56px);
  color: #000;
}
</style>
