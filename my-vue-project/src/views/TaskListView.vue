<template>
  <div>
    <h1>Task List</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <router-link :to="{ name: 'taskDetail', params: { id: task.id } }">{{ task.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TaskController from '../controllers/TaskController'

const controller = new TaskController()
const tasks = ref([])

onMounted(() => {
  tasks.value = controller.getAllTasks()
})
</script>
