import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: {
      producto: {
        nombre: 'Colaciones',
        descripcion: 'Colaciones pa la reina y pal rey de la casa',
        precio: '2x1 en todas las colaciones',
        cantidad: 'Para dos personas',
      }
    }
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue'),
    props: {
      producto: {
        nombre:'Desayunos',
        descripcion: 'Contamos con desayunos nutritivos y deliciosos',
        precio: 2000,
        cantidad: 'Para dos personas',

      }
    },
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
