import { createRouter, createWebHistory } from 'vue-router'
import PieChartView from '../views/PieChartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PieChart',
      component: PieChartView
    },
    {
      path: '/carosel',
      name: 'ImageCaroselView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ImageCaroselView.vue')
    }
  ]
})

export default router
