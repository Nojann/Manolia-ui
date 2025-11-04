import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/app',
      name: 'app',
      component: () => import('@/views/Dashboard.vue'),
    },
  ],
})

export default router
