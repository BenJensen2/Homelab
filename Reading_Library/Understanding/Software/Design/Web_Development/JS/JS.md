# Javascript for the Web

### Bubbling & Capturing
- bubbling comes up from target element
  - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
  - "Almost all events bubble"
    - Exceptions: load, unload, scroll (except that a scroll event on document must bubble to the window), HTML form, focus, blur, Mutation, DOMNodeRemovedFromDocument, DOMNodeInsertedIntoDocument,Progress, loadstart, progress, error, abort, load, loadend
  - event.stopPropogation() prevents handling on upwark elements
  - event.stopImmediatePropogation() pevents handling on current elements

- capturing goes down to find target element

### Events
- [addEventListener vs onclick](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/)
- [click vs touch](https://www.html5rocks.com/en/mobile/touchandmouse/)


#### References
- [On Load in Vanilla Javascript (RyFarlane)](https://ryfarlane.com/article/on-load-vanilla-javascript)
- [Bubbling and Capturing (Javascript.info)](https://javascript.info/bubbling-and-capturing)
- [The Modern Javascript Tutorial (Javascript.info)](https://javascript.info/)