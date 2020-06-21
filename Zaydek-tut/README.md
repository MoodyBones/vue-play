# Notes on Vue.js

by [Mel Jones](https://twitter.com/_moodybones)

## Tutorial

by [Zaydek Gualtieri](https://scrimba.com/course/glearnvue)

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

```js
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
// and then it can understand and read emojify() and html
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, World! ' + emojify('celebration'),
  },
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
- and add it using methods

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

**Properties and Methods are simply variables and functions that are attached to some memory, with JavaScript that's usually an object.**

## Exercise: Cast returns a spell that decorates the wizard

```html
<div id="app">
  <p v-html="lumos(wizard)"></p>
  <!-- call lumos function with wizard arg -->
</div>
```

```js
function cast(emoji) {
  if (!emoji) {
    // if no emoji arg, then return the following
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
    wizard: emojify('wizard'), // wizard data has also been passed through emojify()
  },
  methods: {
    lumos: cast(emojify('lumos')), // lumos method is calling cast() and the arg has also been passed through emojify()
  },
})
```

we can also call another spell incendio() at the same time

```js
   <div id="app">
      <p v-html="incendio(lumos(wizard))"></p>
      // calling incendio here
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

- is a fancy way to describe conditional logic:
- if statement or for loops
- vue gives us super powers for how we think about composing our html using control flow

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

Now if we want to take that further and add contional statements, that check and see if the Wizard is Harry, Ron or Hermione. We could use a ternary..

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

// and a hacky way to show all is to set the template to display none
<template v-if="true" css="display: none;">
  <p v-html="harry    + ' ' + hedwig     "></p>
  <p v-html="ron      + ' ' + scabbers   "></p>
  <p v-html="hermione + ' ' + crookshanks"></p>
</template>
// BUT BETTER IS TO USE V-FOR!!

```

## v-for

- will iterate like a for loops

```js
<div id="app">
  <p v-for="wizard in wizards()" v-html="wizard.name + ' ' + wizard.pet"></p>
</div>
```

## COMPONENTS

What is a component?

- to take a block of code and make it a smaller block of code.

What's a prop?

- A property that can be used to customise a component.

IMPORTANT BINDING RULE

- you must bind using :
- see :name below
- so that it becomes a vue attribute and
- the binding tells it that the data is in our instance and not just a string

```html
<div id="app">
  <wizard :name="harry"></wizard>
  <wizard :name="ron"></wizard>
  <wizard :name="hermione"></wizard>
</div>
```

```js
// emojify returns the corresponding emoji image
function emojify(name) {
  var out = `<img src="emojis/` + name + `.png">`
  return out
}

// cast returns a spell (function) that decorates the wizard
function cast(emoji) {
  var magic = emojify('magic')
  return function (wizard) {
    return wizard + ' ' + magic + ' ' + emoji + ' ' + magic
  }
}

// Vue.component("harry", {template: `<p>` + emojify("harry")+ `</p>` })
// Vue.component("ron", { template: `<p>` + emojify("ron") + `</p>` })
// Vue.component("hermione", { template: `<p>` + emojify("hermione") + `</p>` })

Vue.component('wizard', {
  props: ['name'],
  template: `<p v-html="name"></p>`,
})

var app = new Vue({
  el: '#app',
  data: {
    harry: emojify('harry'),
    ron: emojify('ron'),
    hermione: emojify('hermione'),
  },
  methods: {
    // oculus_reparo returns a spell (function) that repairs glasses
    oculus_reparo: cast(emojify('oculus-reparo')),
    // wingardium_leviosa returns a spell (function) that levitates an object
    wingardium_leviosa: cast(emojify('wingardium-leviosa')),
    // alohomora returns a spell (function) that unlocks a door
    alohomora: cast(emojify('alohomora')),
  },
})
```

- And if we want to add spells to Harry, Ron & Hermione,
- we can add the cast as a binded attribute and pass in the prop,
- the prop in this case will be the name of the spell

```html
<div id="app">
  <wizard :name="harry" :cast="oculus_reparo"></wizard>
  <wizard :name="ron" :cast="wingardium_leviosa"></wizard>
  <wizard :name="hermione" :cast="alohomora"></wizard>
</div>
```

- We must write the spell method in methods!
- and reference the prop in the vue component

```js
function cast(emoji) {
  const magic = emojify('magic') // add new magic emoji
  return function (wizard) {
    return wizard + magic + magic + magic + emoji // return majic emoji
  }
}

Vue.component('wizard', {
  props: ['name', 'cast'], // cast prop goes here!
  template: `<p v-html="cast(name)"></p>`, // call cast here and pass in the name
})

var app = new Vue({
  el: '#app',
  data: {
    harry: emojify('harry'),
    ron: emojify('ron'),
    hermione: emojify('hermione'),
  },
  methods: {
    // spells declared here!
    // oculus_reparo returns a spell (function) that repairs glasses
    oculus_reparo: cast(emojify('oculus-reparo')),
    // wingardium_leviosa returns a spell (function) that levitates an object
    wingardium_leviosa: cast(emojify('wingardium-leviosa')),
    // alohomora returns a spell (function) that unlocks a door
    alohomora: cast(emojify('alohomora')),
  },
})
```

If you wanted to add some data between your elements, it wouldn't show by default. The way that you can fix this is with `<slot></slot>`

```js
Vue.component('wizard', {
  props: ['name', 'cast'],
  template: `<p v-html="cast(name)"><slot></slot></p>`, // slot added here
})
```
