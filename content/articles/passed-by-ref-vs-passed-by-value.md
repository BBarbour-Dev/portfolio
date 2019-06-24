---
title: 'Passed By Reference Vs. Value In Javascript'
date: 2019-06-24
type: article
orignalURL: https://dev.to/steelvoltage/passed-by-reference-vs-value-in-javascript-2fna
description: Understanding the difference can make you predict what your code is going to do.
---

I think it's important to understand memory and what goes on when you declare variables. Memory inside of a computer can be a confusing and abstract thing for a human mind to understand, so I think the best way to come to terms with it is through an analogy, which I will use as I explain this.

Imagine that your computer's memory is a warehouse. Inside of that warehouse there are storage bins where boxes of data are kept. Upon declaring a variable, you ship a box to that warehouse where it is then given a bin that will hold it, until you need it later.

Primitive data types in Javascript are Passed by Value. If you're not sure what the seven primitive data types are, that's okay. I would stop and read this to get an idea. Chances are you've seen them all while you've been learning, but knowing the difference helps here. [MDN: Javascript - Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

So say you set a variable to equal another. For example:

```javascript
let box1 = 'sugar'
let box2 = box1
```

Let's break this down... in our proverbial warehouse one of the workers goes to the bin `box1` is in, examines the box, and uses its Javascript magic to create an exact clone of it. The worker then carries the clone off and stores it in a new bin for `box2`.

The **value** is copied, you see, `box1` and `box2` both have `'sugar`'.

So, what if we change one of the values?

```javascript
box2 = 'brown sugar'

console.log(box1) // returns 'sugar'
console.log(box2) // returns 'brown sugar'
```

They're no longer the same, but that's okay. Only the original value was passed when `box2` was created, they're not related to each other in any way and thus have no effect on each other.

Objects in Javascript use Pass by Reference. Most of the constructs in Javascript we use are Objects, so I think it's important to understand how this works. Objects constitute `{}` with key-value pairs, as well as things like arrays and functions. You've probably heard the saying that "everything in Javascript is an object." It's somewhat true!

```javascript
const box3 = {
  contents: 'salt'
}

const box4 = box3
```

In this example our little worker recognizes that `box3` is an Object. So he scribbles down its location in the warehouse. It then zips off to an open container for `box4` and tapes the paper on the rack, referencing the location of `box3` and its contents.

That is Passed by Reference. Sometimes the Objects we create or pull into our apps can be massive, with hundreds or perhaps even thousands of key-value pairs. It would be incredibly wasteful and not performant of the computer to make a clone everytime.

So, it simply references instead. At times this can have unforeseen consequences.

```javascript
box4.contents = 'pepper'

console.log(box3.contents) //returns "pepper"
console.log(box4.contents) //returns "pepper"
```

Wait, hold on! We didn't mean for that to happen. Why did it?

Because `box4` doesn't contain its own value, it contains a reference to `box3`. By updating the `contains` property on `box4`, we're actually telling it to update `box3.contains`.

That right there is where the difference can come to bite us. So, the question is, how do we make a clone of `box3`, rather than passing the reference along?

Well, ES6 gave us a very clean and nice way to do it, the spread operator.

```javascript
box4 = { ...box3 }
```

You can also use the trusty old method of cloning, if you wish.

```javascript
box4 = Object.assign({}, box3)
```

Mind you, this is a very _basic_ primer to how these things work. I hope my examples and warehouse analogy helped some of you imagine the difference a little better than just reading a definition. Play around with this, experiment. Also, dig deeper, as it's a very important subject for working with data in your apps.

You'll cross paths with it or brush up against it at some point, I guarantee it.
