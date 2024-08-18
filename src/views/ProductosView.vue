<template>
    <div>
        <CardComponent :producto="producto" />
        <router-link to="/">
                <button class="m-4 p-2 text-white bg-info">
                    Volver al inicio
                </button>
        </router-link>
    </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';

export default {
    name: 'ProductosView',
    components: {
        CardComponent,
    },
    props: {
    producto: {
      type: Object,
      required: true,
    },      
  },
}

</script>

<style scoped>
h1{
font-size: 3rem;
}
</style>