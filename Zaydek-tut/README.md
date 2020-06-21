# Notes on Vue.js

by (Mel Jones)[https://twitter.com/_moodybones]

## Tutorial

by (Zaydek Gualtieri)[https://scrimba.com/course/glearnvue]

## The Idea behind Vue

- we can seperate our concerns
- instead of storing data in the html
- you can store the data in JavaScript

```html
<div id="app">
  <p>{{ message }}</p>
</div>
```

```js
    <script>
      var app = new Vue({
        el: '#app', // this is how hook into a base element
        data: { // then we can define whatever keys we want
          message: "hello, world!"
        }
      })
    </script>
```

alternative syntax

```html
<div id="app">
  <p v-text="message"></p>
  // but this won't understand the html
</div>

// instead use
<div id="app">
  <p v-html="message"></p>
</div>
```

```js
and then it can understand and read emojify() and html
var app = new Vue({
	el: "#app",
    data: {
        message: "Hello, World! " + emojify("celebration")
    }
})
```

## How to bind User Data to Inputs/Variables

### v-model

```js
    <div id="app">
      <input type="text" v-model="message2"></input>
      <p
        v-html="
          message1.slice(0, 7) +
          message2 +
          message1.slice(12)
        "></p> // hello, Vue!
    </div>

    <script>
      'use strict'

      // emojify returns the corresponding emoji image
      function emojify(name) {
        var out = `<img src="emojis/` + name + `.png">`
        return out
      }

      var app = new Vue({
        el: '#app',
        data: {
          message1: "hello, World! " + emojify("celebration"),
          message2: "Vue"
        },
      })
    </script>
```

### How is this powerful?

- We have a virtual DOM
- We can bind keys
- with one
- & two way binding

## METHODS

- seperating data from the DOM
- and add to it using methods

### What is a property?

- a variable thats attached to an object

```js
var app = new Vue({
  el: '#app',
  data: {
    wizard: emojify('wizard'),
  },
})

// wizard is a property of data, which is a property of app
// app.wizard
```

### What is a method?

- a function that is attached to an object

Properties and Methods are simply variables and functions that are attached to some memory. And in JavaScript that's usually an object.

Exercise: Cast returns a spell that decorates the wizard

```html
<div id="app">
  <p v-html="lumos(wizard)"></p>
  <!-- call lumos function with wizard arg -->
</div>
```

```js
function cast(emoji) {
  if (!emoji) {
    // if not emoji arg, then return the following
    emoji = '¯\\_(ツ)_/¯'
  }
  return function (wizard) {
    // else return a function that takes the wizard as an arg and return the following..
    return emoji + wizard + emoji
  }
}
var app = new Vue({
  el: '#app',
  data: {
    wizard: emojify('wizard'), // wizard data is with emojify()
  },
  methods: {
    lumos: cast(emojify('lumos')), // lumos method is calling cast and the arg has been passed into to emojify()
  },
})
```

we can also call another spell incendio() at the same time

```js
   <div id="app">
      <p v-html="incendio(lumos(wizard))"></p> <!-- call incendio here-->
    </div>

    <script>
      'use strict'

      // emojify returns the corresponding emoji image
      function emojify(name) {
        var out = `<img src="emojis/` + name + `.png">`
        return out
      }

      function cast(emoji) {
        if (!emoji) {
          emoji = '¯\\_(ツ)_/¯'
        }
        return function (wizard) {
          return emoji + wizard + emoji
        }
      }

      var app = new Vue({
        el: '#app',
        data: {
          wizard: emojify('wizard'),
        },
        methods: {
          lumos: cast(emojify('lumos')),
          incendio: cast(emojify('incendio')), // declare incendio method here
        },
      })
    </script>
```

## CONTROL-FLOW

- is a fancy way to describe
- conditional logic: if statement or for loops
- vue gives us super powers for how we think about composing
- our html using control flow

```js
var app = new Vue({
  el: '#app',
  data: {
    // all data and emojis for wizards and their pets
    wizard: '',
    harry: emojify('harry'),
    hedwig: emojify('hedwig'),
    ron: emojify('ron'),
    scabbers: emojify('scabbers'),
    hermione: emojify('hermione'),
    crookshanks: emojify('crookshanks'),
  },
  methods: {
    wizards: function () {
      // this organises an array of objects
      return [
        // these are anonymous keyless objects, and each object has a name and a pet
        { name: this.harry, pet: this.hedwig },
        { name: this.ron, pet: this.scabbers },
        { name: this.hermione, pet: this.crookshanks },
      ]
    },
  },
})

app.wizard = app.harry // this is manually setting the wizard to harry
```

We want to make so that if the emoji is set to Harry, show Harry and his pet Hedwig

```js
<div id="app">
  <p
    v-if="wizard == harry" // if statement
    v-html="wizard + ' ' + hedwig" // return statement
  ></p>
</div>
```

Now if we want to take that furter and add contional statements, that check and see if the Wizard is Harry, Ron or Hermione. We could use a ternary..

```js
<div id="app">
  <p
    v-html="wizard + ' ' + (
      wizard === harry ? hedwig :
      wizard === ron ? scabbers :
      wizard === hermione ? crookshanks : ""
    )"
  ></p>
</div>
```

### Template

if this thing is true, i'll give you content, but not the template

```js
<template v-if="true">
  <p v-html="harry    + ' ' + hedwig     "></p>
  <p v-html="ron      + ' ' + scabbers   "></p>
  <p v-html="hermione + ' ' + crookshanks"></p>
</template>

// and a hacky what to show all is to set the template to display none
<template v-if="true" css="display: none;">
  <p v-html="harry    + ' ' + hedwig     "></p>
  <p v-html="ron      + ' ' + scabbers   "></p>
  <p v-html="hermione + ' ' + crookshanks"></p>
</template>
// BUT BETTER IS TO USE V-FOR!!

```

### v-for or For Loop

- will iterate

```js
<div id="app">
  <p v-for="wizard in wizards()" v-html="wizard.name + ' ' + wizard.pet"></p>
</div>
```
