<script setup>

</script>

<template>
  <section>
    <br><b>CATEGORIAS</b><br/>
      <div>
          <select>
            <option>PIZZAS</option>
            <option>La Tipika</option>
            <option>Machu Pizza</option>
            <option>Pizzería Remix</option>
            <option>Del Búho</option>
            <option>Tu Candelas</option>
            <option>Sr. Pizza</option>
            <option>Sunrise</option>
          </select>
          <select>
            <option>CHIFAS</option>
            <option>4 Dragones</option>
            <option>Chifa Lin</option>
            <option>Chifa Chen Xing</option> 
          </select>
          <select>
            <option>POLLERIAS</option>
            <option>Parador Chicken</option>
            <option>La Choza de Oscar</option>
            <option>El Rancho</option>
            <option>Polleria el Vecino</option>
            <option>El Establo de Favio</option>
          </select>
          <select>
            <option>BROSTERIA & SALCHIPAPERIA</option>
            <option>Palmeras</option>
            <option>Snoopy</option>
          </select>
          <select>
            <option>CEVICHE</option>
            <option>Mareas</option>
            <option>Puerto Arrecife</option>
          </select>
          <select>
            <option>HAMBURGUESAS</option>
            <option>Bembos</option>
            <option>Sr. Lechon</option>
          </select>
          <select>
            <option>CHICHARRON</option>
            <option>La Red</option>
          </select>
          <select>
            <option>PARRILLA</option>
            <option>La Estancia</option>
            <option>Casa Grill</option>
          </select>
          <select>
            <option>KANKACHO</option>
            <option>La Wallatita Kankacho</option>
          </select>
          <select>
            <option>SUSHI</option>
            <option>Ten Bento</option>
          </select> 
          <select>
            <option>TIMPO</option>
            <option>Pez de Oro</option>
          </select>
          <select>
            <option>POSTRES</option>
            <option>Ricos Pan</option>
            <option>Capriccios</option>
          </select> 
      </div>
  </section>
</template>

<style scoped>
section{
  background-color: beige;
}
b{
  font-size: 30px;
  font-family: fantasy;
  text-align: right;
  color: rgba(255, 25, 25, 0.945);
  background-color: whitesmoke;
}
select{
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  background-color: rgb(233, 28, 28);
  grid-template-columns: 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7%;
  column-gap: 5%;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 1200px;
}
option{
        background:rgba(0, 89, 255, 0.842);
}


</style>
