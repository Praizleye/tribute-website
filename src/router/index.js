import { createRouter, createWebHistory } from 'vue-router'
import bioView from '../views/bioView.vue'
import tribute from '../views/tribute.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bio',
      name: 'bio',
      component: bioView
    },
    {
      path: '/tribute',
      name: 'tribute',
      component: tribute
    }
  ]
})

export default router
