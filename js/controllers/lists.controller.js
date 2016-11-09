// 'use strict';
// // Lists Controller
// class ListsController {
//   constructor() {
//     this.$addListForm = $('#add_list')
//     this.$listTitleInput = $('#list_title')
//     this.$selectListMenu = $('#select_list')
//     this.$addTaskForm = $('#add_task')
//     this.$wrapper = $('#wrapper')
//   }

//   init() {
//     this.$addTaskForm.css('display', 'none')

//     this.$addListForm.on('submit', (event) => {
//       event.preventDefault()

//       let list = new List(this.$listTitleInput.val())
//       list.build()

//       this.$listTitleInput.val('')
//       this.$addTaskForm.css('display', 'block')
//     })

//     $('#lists').on('click', '.destroy-list', function(event) {
//       event.preventDefault()
      
//       let id = $(this).parent().parent().find('ul').data('id')
//       let index = List.all.findIndex(function(list){
//         if (list !== undefined) {
//           return list.id === id
//         } else {
//           return false
//         }
//       })

//       delete(List.all[index])

//       $('#lists').empty()
//       $('#select_list').empty()

//       List.all.forEach((list) => {
//         if (list !== undefined) {
//           list.build()
//         }
//       })
//     })
//   }
// }
