<script setup>
  const props = defineProps({
    plato: {
      type: Object,
      required: true
    }
  })

  defineEmits(['agregar-carrito'])
</script>

<template>
  <div>
    {{plato.nombre}}
    {{plato.precio}}
  </div>
  <div>
    <button @click="$emit('agregar-carrito', plato)">Añadir al carrito</button>
  </div>
</template>
