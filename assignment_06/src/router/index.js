import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: welcome
    }

  ]
})

export default router
