<script setup>
import { onMounted, computed } from "vue"

const props = defineProps({
  carrito: {
    type: Array,
    required: true,
  },
})

console.log(props.carrito)
console.log('a: ', props.carrito[0].restaurante)
console.log('b: ', props.carrito.value)

//+51 929 942 372

const sendToWhatsapp = () => {
  console.log("send")
  const fullMessage = props.carrito[0].restaurante
  window.open(
    `https://api.whatsapp.com/send?phone=${+51929942372}&text=${encodeURIComponent(
      fullMessage
    )}`
  )
}

</script>

<template>
  <div v-if="carrito.length == 0" class="full-screen">
    El carrito esta vacio
  </div>
  <div v-else class="full-screen">
    <div>
      {{ carrito }}
    </div>
    <div>
      <button @click="sendToWhatsapp">Enviar Whatsapp</button>
    </div>
  </div>
</template>

<style scoped>
.full-screen {
  min-height: calc(100vh - 56px);
}
</style>
