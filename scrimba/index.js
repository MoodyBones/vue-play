// Lesson 1 - Hello Vue!

// var app = new Vue({
//   // create new instance
//   // then pass in the options object
//   el: '#app', // tell it where we want it to live. we target dom node with id #app
//   data: {
//     message: 'Hello Vue!'
//   }
// })

// app.message = `I have changed the data`

// ///////////////
// Lesson 2 - Conditionals

// var app = new Vue({
//   el: '#app',
//   data: {
//     seen: true
//   }
// })

// app.seen = false

// ////////////////
// Lesson 3 - For Loops

// var app = new Vue({
//   el: '#app',
//   data: {
//     todos: [
//       { text: 'Learn JavaScript' },
//       { text: 'Learn Vue' },
//       { text: 'Build something awesome' },
//     ]
//   }
// })

// app.todos.push({ text: 'Meet Arne for Dinner <3' })

// //////////////
// Lesson 4 - Event Listeners - Handling User Input

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js!'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })

// // //////////////
// // Lesson 5 - v-model

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

// //////////////
// Lesson 6  - Components

Vue.component('todo-item', {
  template: '<li>This is a todo</li'
})

var app = new Vue({
  el: '#app'
})


