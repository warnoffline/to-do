import { createRouter, createWebHistory } from 'vue-router'
import todoCreate from '@/views/todoCreate.vue'
import todoList from '@/views/todoList.vue'
const routes = [
  {
    path: '/',
    component: todoList
  },
  {
    path: '/create',
    component: todoCreate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
