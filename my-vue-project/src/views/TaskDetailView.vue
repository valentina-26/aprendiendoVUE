<template>
  <div>
    <h1>Task Detail</h1>
    <div v-if="task">
      <p>ID: {{ task.id }}</p>
      <p>Name: {{ task.name }}</p>
      <button @click="deleteTask">Delete Task</button>
    </div>
    <p v-else>Task not found</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TaskController from '../controllers/TaskController'

const route = useRoute()
const router = useRouter()
const controller = new TaskController()
const task = ref(null)

onMounted(() => {
  const taskId = parseInt(route.params.id)
  task.value = controller.getTaskById(taskId)
})

function deleteTask() {
  const taskId = parseInt(route.params.id)
  controller.deleteTask(taskId)
  router.push('/')
}
</script>
