<script setup>
  const props = defineProps({
    carritoItem: {
      type: Object,
      required: true
    }
  })

  
</script>

<template>
  <div>
    {{carritoItem.restaurante}}
    {{carritoItem.precio}}
  </div>
</template>