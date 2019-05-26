---
title: 'Disabling Links As Buttons in Gatsby'
date: 2019-05-10
type: article
orignalURL: https://dev.to/steelvoltage/completed-my-first-major-react-project-3fo4
description: How to use Link as a button and disable it.
---

I was working on my Gatsby blog project today and ran into a little quirk. I wanted navigation buttons to let the user go to the next and previous posts in the blog. I wanted those buttons to be Gatsby Links. Simple enough, right? However, when the user reaches the very first post or the very last, I wanted said button links to be disabled.

For example:

```javascript
<Link
  disabled={!nextPost}
  className="button"
  to={nextPost ? nextPost.node.fields.slug : '/'}
>
  Next Post
</Link>
```

See, if nextPost is falsy, the Link should be disabled. Except, in practice I found that despite it appearing disabled it still can be clicked and fired off. And it will sling them to the index page of the site.

After a little digging around Google, I figured out this neat trick. It required I add this class to my CSS.

```css
.disabled-link {
  pointer-events: none;
}
```

After that I just needed a ternary statement put this before the component's return JSX.

```javascript
const disabledNext = nextPost ? '' : 'disabled-link'
```

To finish, I morphed my Link button into this:

```javascript
<Link
  disabled={!nextPost}
  className={`button ${disabledNext}`}
  to={nextPost ? nextPost.node.fields.slug : '/'}
>
  Next Post
</Link>
```

The .disabled-link CSS class makes it so it can't be clicked at all, returning the disabled functionality to it that I intended. Bing, bang, boom!
