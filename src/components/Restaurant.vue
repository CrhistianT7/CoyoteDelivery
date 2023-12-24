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
    {{ restaurante.nombre}}
    <div>
      enlace a sus platos
    </div>
  </div>
</template>

<style scoped>
</style>
