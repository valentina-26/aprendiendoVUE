import TaskModel from '../models/TaskModel'

export default class TaskController {
  constructor() {
    this.model = new TaskModel()
  }

  getAllTasks() {
    return this.model.getTasks()
  }

  getTaskById(id) {
    return this.model.getTaskById(id)
  }

  addTask(task) {
    this.model.addTask(task)
  }

  deleteTask(id) {
    this.model.deleteTask(id)
  }
}

