<template>
  <ComponenteNav />

  <router-view />

  <MediosPagoComponent />
  <FooterComponent />

</template>

<script>
import ComponenteNav from './components/ComponenteNav.vue';
import FooterComponent from './components/FooterComponent.vue';
import MediosPagoComponent from './components/MediosPagoComponent.vue';

export default {
  name: 'App',
  components: {
    ComponenteNav,
    MediosPagoComponent,
    FooterComponent,
  }
}
</script>
