import { createRouter, createWebHistory } from 'vue-router'
import TaskListView from '../views/TaskListView.vue'
import TaskDetailView from '../views/TaskDetailView.vue'

const routes = [
  { path: '/', name: 'taskList', component: TaskListView },
  { path: '/task/:id', name: 'taskDetail', component: TaskDetailView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
