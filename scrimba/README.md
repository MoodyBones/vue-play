# Scrimba Vue.js Tutorial

[Scrimba](https://scrimba.com/p/pXKqta/cQ3QVcr) 

**Vue.js is a progressive framework for building user interfaces**

at the core of vuejs is a system that allows you to declaratively render data to the dom

with a very straight forward template syntax

cdn = content delivery network

## Lesson One
```
var app = new Vue({
  // create new instance
  // then pass in the options object
  el: '#app', // tell it where we want it to live. we target dom node with id #app
  data: {
    message: 'Hello Vue!'
  }
})

app.message = `I have changed the data`


```

