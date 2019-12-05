# Scrimba Vue.js Tutorial

[Scrimba](https://scrimba.com/p/pXKqta/cQ3QVcr) 

**Vue.js is a progressive framework for building user interfaces**

at the core of vuejs is a system that allows you to declaratively render data to the dom

with a very straight forward template syntax

cdn = content delivery network

## Lesson One - Hello Vue!
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



## Lesson 2 - Conditionals

Toggle Presence of an element..
```
// v-if is a Directive
// v- special attribute provided by Vue

// these apply reactive behaviour to the render dom

<span v-if="seen">Now you see me</span>
// what we are saying is 
// that we only want to render this span
// if the seen property evaluates to true
```

```
// seen property is in the data object
var app = new Vue({

  el: '#app', 
  #app
  data: {
    seen: true
  }
})

// change it to false
app.seen = false

// we can bind data to texts and attributes and manipulate it very easily
```