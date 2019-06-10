---
title: 'Var and Function Scope In Javascript'
date: 2019-06-10
type: article
orignalURL: https://dev.to/steelvoltage/var-and-function-scope-in-javascript-3k4p/edit
description: The difference between the two with examples.
---

Time to talk scope.

Scope determines visible and accessible variables. _Block scope_ is scope within a set of curly braces. Most programming languages have block scope. That being said, for you Javascript newbies out there, what is _function scope_ and how does it work?

It's okay if you don't know. I didn't at first either. Let me explain.

As the function part of the name implies... anytime we create a `var` inside of a function, it becomes scoped to the function.

Example time! We just need to make it clearer with code:

```javascript
function dog() {
  var name = 'Fido'
}

console.log(name) //name is not defined
```

You can't access `name` outside of the function. Now, let's try it again, with a block.

```javascript
var dog = true
if (dog) {
  var name = 'Fido'
}

console.log(name) // returns Fido
```

Even through the `name` variable was declared inside of the block, we can access outside.

How do the `let` and `const` keywords play into this? Well, rewinding to our last example, we'll refactor the code a little to see.

```javascript
const dog = true
if (dog) {
  const name = 'Fido'
}

console.log(name) //name is not defined
```

Note: this would work the exact same way with the `let` keyword as well.

The variable can't be accessed, as it's scoped to the `if` statement's block, trapped inside of its curly bracket prison, with no hope of escape. Not like its older brother `var`, who is free in this instance.

For most seasoned Javascript devs this is probably well known and really basic information.

I learned ES6 variable keywords and got the impression never to touch `var`. As time went on I stopped seeing it as some forbidden relic of the past. It's a tool, just like all the other keywords in the language.

I've been expanding my knowledge about Javascript, getting down to the nuts and bolts. Part of the journey has been playing with `var`, to cement the difference in my mind. I think it helps when looking at older code, or code made to be compatible for older browsers.

For the newbies out there, I hope my explanation and examples help you avoid the head scratching `var` caused me.

Play around with the keyword yourself, get comfortable. Fear not! You'll be crossing its path eventually, better to be prepared as they say.
