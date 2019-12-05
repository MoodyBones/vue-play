var app = new Vue({
  // create new instance
  // then pass in the options object
  el: '#app', // tell it where we want it to live. we target dom node with id #app
  data: {
    message: 'Hello Vue!'
  }
})

app.message = `I have changed the data`
