---
title: 'Array.filter() Is Awesome'
date: 2019-04-22
type: article
orignalURL: https://dev.to/steelvoltage/array-filter-is-awesome-2k7
description: I've come to appreciate this array method.
---

This weekend I was working on my React project and in one of my components I needed to delete from a list. The data from the list was stored in state with an array.

I learned multiple ways to manipulate arrays in my studies. You have .pop(), .unshift(), .slice(), .splice() and... .filter(). My first decision when picking the best method was to think about React. State is immutable. That meant that I couldn't effect it directly. Fine, no problem--that meant I could discard a few of these options.

It left me with .slice() and .filter().

My instinct was to reach for .slice(). But, I decided to really look at .filter() as I had seen other people use it in React in examples.

After pouring over the documentation on MDN, it clicked to me why it's such a nice method for something like deleting from an array.

I'm already using .map() to iterate over the array to render the list. That gives me the index as one of the arguments. I figured I could then pass that as a prop alongside the state to my component. Inside the component I need only create a handleDelete function that triggers onClick.

Inside the deleteItem the .filter() takes a callback function that returns a boolean based on a condition. Once the entire array has been evaluated, it spits out a new array with of those indexes that were determined as true.

To veteran javascript devs this is probably a no brainer, but I'm glad I realized how useful .filter() can be.

Here's an example of my component:

```javascript
const ItemList = ({ inventory }) => {
  const [list, setList] = inventory
  const deleteItem = index => {
    const newInventory = list.filter((item, itemIndex) => index !== itemIndex)
    return setList([...newInventory])
  }
  return (
    <tbody>
      {list.length > 0 ? (
        list.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                {item}{' '}
                <div className="is-pulled-right">
                  <button
                    className="delete is-small"
                    onClick={e => deleteItem(index)}
                  />
                </div>
              </td>
            </tr>
          )
        })
      ) : (
        <tr>
          <td>
            <em>Empty.</em>
          </td>
        </tr>
      )}
    </tbody>
  )
}

export default ItemList
```
