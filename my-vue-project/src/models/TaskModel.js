// src/models/TaskModel.js

export default class TaskModel {
  constructor() {
    this.tasks = []
  }

  getTasks() {
    return this.tasks
  }

  getTaskById(id) {
    return this.tasks.find(task => task.id === id)
  }

  addTask(task) {
    this.tasks.push(task)
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
