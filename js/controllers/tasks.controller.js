'use strict';
// Tasks Controller
class TasksController {
  constructor() {
    this.$addTaskForm = $('#add_task')
    this.$taskDescriptionInput = $('#task_description')
    this.$selectListMenu = $('#select_list')
    this.$taskPriorityInput = $('#task_priority')
    this.$wrapper = $('#wrapper')
  }

  init() {
    this.$addTaskForm.on('submit', (event) => {
      event.preventDefault()

      let description = this.$taskDescriptionInput.val()
      let priority = this.$taskPriorityInput.val()

      let list_id = parseInt(this.$selectListMenu.val())

      let list = List.all.find(function(list){
        if (list !== undefined) {
          return list.id === list_id
        } else {
          return false
        }
      })

      let task = new Task(description, priority, list)
      task.build()

      this.$taskDescriptionInput.val('')
      this.$taskPriorityInput.val('')
      this.$selectListMenu.val('')
    })

    $('#lists').on('click', '.destroy-task', function(event) {
      event.preventDefault()
      
      let task_id = $(this).parent().data('id')
      let list_id = $(this).parent().parent().data('id')

      let list = List.all.find(function(list){
        if (list !== null) {
          return list.id === list_id
        } else {
          return false
        }
      })

      let index = list.tasks.findIndex(function(task){
        if (task !== null) {
          return task.id === task_id
        } else {
          return false
        }
      })

      list.tasks[index] = null

      $(this).parent().parent().empty()

      list.tasks.forEach((task) => {
        if (task !== null) {
          task.build()
        }
      })
    })
  }
}
