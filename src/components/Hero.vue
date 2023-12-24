<script setup>

</script>

<template>
  <div class="background-img">
    <div class="hero-message">
      ALGUN TEXTO ATRACTIVO
      <div>
        999999
      </div>
    </div>
  </div>
</template>

<style scoped>
  .background-img {
    background-image: url('../assets/repartidor2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 56px);
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .hero-message {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: red;
    font-size: 24px;
    font-weight: 700;
  }
</style>
