<script setup>
const props = defineProps({
  carritoItem: {
    type: Object,
    required: true,
  },
})
defineEmits(["incrementar-cantidad", "decrementar-cantidad", 'eliminar-plato'])
</script>

<template>
  <div class="carrito-item">
    <h4>Local: {{ carritoItem.restaurante }}</h4>
    <h5>Plato: {{ carritoItem.nombre }}</h5>
    <span>Precio: {{ carritoItem.precio }}</span>
    <div class="cantidad">
      <label>Cantidad: </label>
      <div>
        <button
          @click="
            $emit(
              'decrementar-cantidad',
              carritoItem.id,
              carritoItem.restaurante
            )
          "
        >
          -
        </button>
        <span>{{ carritoItem.cantidad }}</span>
        <button
          @click="
            $emit(
              'incrementar-cantidad',
              carritoItem.id,
              carritoItem.restaurante
            )
          "
        >
          +
        </button>
      </div>
      <div>
        <button class="eliminar-buton" @click="$emit('eliminar-plato', carritoItem.id, carritoItem.restaurante)">x</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carrito-item {
  color: #000;
  display: flex;
  flex-direction: column;
}

.carrito-item .cantidad {
  display: flex;
  flex-direction: column;
}

.eliminar-buton {
  color: white;
}
</style>
