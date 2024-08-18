<template>
  <!-- cartas -->
  <section class="container" id="productos">
    <h1 class=" text-center">Nuestros Productos</h1>
    <div class="row">
      <!-- primera -->
      <div class="col-sm-4 col-12 px-5 mb-4">

        <div class="card">
          <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ producto.nombre }}</h5>
            <p class="card-text">{{ producto.descripcion }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: ${{ producto.precio }}</li>
            <li class="list-group-item">Cantidad: {{ producto.cantidad }}</li>
          </ul>
          <div class="card-body">
            <router-link :to="{name: productos}" class="card-link">Ver más</router-link>
            <router-link :to="{name: productos}" class="card-link">Comprar</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    producto: {
      type: Object,
      required: true,
    },

      
  },
}
</script>

<style>
  
</style>