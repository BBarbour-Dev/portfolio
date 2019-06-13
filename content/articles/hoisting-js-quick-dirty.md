---
title: 'Hoisting in JS: The Quick and Dirty'
date: 2019-06-12
type: article
orignalURL: https://dev.to/steelvoltage/array-filter-is-awesome-2k7
description: A super quick overview of what hoisting is.
---

Before reading this, check out: [Var and Function Scope](https://dev.to/steelvoltage/var-and-function-scope-in-javascript-3k4p)

```javascript
console.log(hoistAndRun()) // returns 'also hoisted and can be ran'
console.log(hoistMe) // returns undefined

var hoistMe = 'hoisted, but undefined'

function hoistAndRun() {
  return 'also hoisted and can be ran'
}
```

The first thing to understand about hoisting is that it's a feature of Javascript. (I think some other languages have it too, like Python, but not all use it.) You'll see a lot of people explain it as variables (declared with `var`) and functions (using the `function` keyword) being "lifted" to the top of the code.

That's not accurate. Javascript doesn't do that, at least not physically. It's more of an analogy or conceptual way of thinking of it. Instead, Javascript creates space in memory for the variables and functions. Think of it as the programming equivalent of making a dinner reservation.

Hoisted `var` variables will return `undefined`. Because, you haven't assigned them a value (until you actually do with `=`). Functions can be ran immediately, because they are fully placed in memory before the code is ran.

Function expressions using `var` are _are_ hoisted, but cannot be called right away.

```javascript
console.log(hoistAndRunAgain()) // TypeError: hoistAndRunAgain is not a function

var hoistAndRunAgain = function() {
  return 'hoisted, but undefined as well'
}
```

Variables and function expressions assigned with `const` and `let` are not hoisted, as they use block scope.

```javascript
console.log(hoistConstant) // ReferenceError: hoistContant is not defined
console.log(hoistLet) //ReferenceError: hoistLet is not defined

const hoistConstant = 'not hoisted'
let hoistLet = 'not hoisted'
```

That's the quick and dirty of hoisting as I understand it. There is probably more nuance and detail that could be provided about hoisting, but hopefully this is enough to get you started, or at least to jog your memory.
