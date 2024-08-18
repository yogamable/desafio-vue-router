<template>
  <CardComponent :producto="producto" />
</template>

<script>
import CardComponent from '../components/CardComponent.vue';

export default {
  name: 'HomeView',
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
</style>
