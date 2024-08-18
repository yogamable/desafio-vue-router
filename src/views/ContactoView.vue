<template>
    <div class="ContactoView container-fluid h-100">
        <h1 class="pt-5 mt-5 text-center">Contacto</h1>
        <router-link to="/">
                <button class="m-4 p-2 text-white bg-info">
                    Volver al inicio
                </button>
        </router-link>
    </div>

</template>

<script>
export default{
    name: 'ContactoView',
}
</script>

<style scoped>
h1{
    font-size: 3rem;
}
</style>