---
title: 'This and Bind In Javascript'
date: 2019-06-17
type: article
orignalURL: https://dev.to/steelvoltage/this-and-bind-in-javascript-2pam
description: A little guide on how the two work and can be used.
---

If you're learning Javascript, you'll no doubt run into the `this` keyword early on. At first, it appears quite simple. Here's the basic definition as I have come to understand it.

The `this` keyword references the object that the function is a property of.

Say that ten times. Carve it into your arm with a knife. And then regret it. As you dig a little deeper, there's way more nuance going on with the keyword than first meets the eye. Because with `this` where the function is created doesn't matter. The only thing that matters is where the function is executed.

```javascript
const protagonist = {
  name: 'Mario',
  announce() {
    return this.name
  }
}

console.log(protagonist.announce()) // Returns Mario
```

Rule of thumb, look to the left of the function call. What do we see in this example? `protagonist`. That's what `this` is referencing. Good, you understand how `this` works a majority of the time.

Now for the proverbial wrench in the machine. What if there's nothing to the left of the function call? What happens?

Well, it's still within an object, the `global` object. The `global` object the first thing that Javascript puts onto the stack and it's the last thing to leave it. In the case of the browser, `global` means the `Window` object. Therefore, things can be a bit weird sometimes with `this`. It feels like it's doing something nonsensical, but if you understand `global` and how scope works, it all starts to fall into line. I definitely suggest reading about those two things first, if you're not sure what I'm talking about.

```javascript
function antagonist() {
  return this.name
}

console.log(antagonist()) //returns undefined
```

What is `this` referencing here? Well, the function isn't isn't isolated, as it appears in the code, it's actually "inside" of the `global` object. Therefore, it looks for a variable called `name` inside of `global`. Since name hasn't been declared, it spits out undefined.

Let's look at another example:

```javascript
const protagonist = {
  name: 'Mario',
  announce() {
    return this.name
  }
}

const ourHero = protagonist.announce

console.log(ourHero()) //returns undefined
```

This one is a little trickier. Actually, a similar example confused me the first time I saw it. Let's break it down a bit so you understand what's happening here.

You create the `protagonist` object, assign it the `announce` method. Simple enough. Next, you create the variable `ourHero`, which is apart of the `global` object. You assign `ourHero` the `announce` function from `protagonist`. It references just the `announce` function, not the object it sits within.

It's the same as if we did:

```javascript
function announce() {
  return this.name
}

const ourHero = announce()
```

So what is `this` referencing in this case?

Well, there's nothing to the left, right? So it references the `global` object, as I said before. It's also important to know that adding `use strict` to your document or even to beginning of a function will prevent this behavior. Instead of `undefined` you'll get a stack error saying that name has not been defined. That alone can be really valuable if you don't want to deal with with this behavior.

There's way to make it work too, to get the reference to `protagonist` that we need. Enter the `bind` keyword.

Image the bind method as a lasso we throw at another object to tether to it. Once connected, the `this` keyword will reference what you pass into it as a parameter.

Let's take a look

```javascript
const protagonist = {
  name: 'Mario',
  announce() {
    return this.name
  }
}

const ourHero = protagonist.announce.bind(protagonist)

console.log(ourHero()) //returns Maro
```

There we go, the `protagonist` is bound and what `this` references. A little magic, but it helps avoid the problem of not being able to call the function as intended.

My example here doesn't cover _everything_ when it comes to `bind` and `this`, but these are the very basics. As you get into using ES6 classes, you'll notice `this` being used in `constructor` as well to declare new class properties, which you can use the lesson here to help that all make sense.

Good luck and keep learning. Because, that's what I'm going to do.
