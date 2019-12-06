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

Toggle Presence of an element

```
// v-if

// is a Directive
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

## Lesson 3 - For Loops

```
// v-for

// can be used to display a list of items,
// using the data from an array

<div id="app">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```
data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
    ]



// and to add
app.todos.push({ text: 'Meet Arne for Dinner <3' })
```

## Lesson 4 - Handling User Input

```
// v-on:click

// allows you to attach event listeners
// that evoke methods on your Vue instance

<p>{{ message }}</p>
<button v-on:click="reverseMessage">Reverse Message</button>

```

```
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

// in this method we update the state of the app,
//  without touching the dom
// all dom manipulations are handled by view
```

## Lesson 5 - v-model

```
// v-model
// makes it super simple to create 2 way bindings,
// between form inputs and app state

<p>{{ message }}</p>
<input v-model="message">

```

```
  data: {
    message: 'Hello Vue!'
  }

// this makes user synchronisation super simple
```

## Lesson 6 - Components

Components are an abstraction,
that allow us to build large scale apps,
that are composed of small self contained,
and reusable components.

A Vue Component is essentially an Vue Instance,
with predfined options.

```
Vue.component('todo-item', {
  template: '<li>This is a todo</li'
})

var app = new Vue({
  el: '#app'
})
```

```
<ol>
  <todo-item></todo-item>
</ol>

// but this just renders the same 'This is a todo' string,
// over and over

// it would be better to
// pass data from parent scope,
// and into the child component

// see next lesson..
```
