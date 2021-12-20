# React
A JavaScript library for building user interfaces

Can add anywhere in html document & have multiple independent DOM containers.

### A Simple Component
- Implements a `render()` method that takes input data and returns what to display.
	- JSX syntax (Optional but not required)
	- Input data can be accessed via `this.props`

# Main Concepts

## Installation

### Recommended Toolchains
-   If you’re **learning React** or **creating a new [single-page](https://reactjs.org/docs/glossary.html#single-page-application) app,** use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).
-   If you’re building a **server-rendered website with Node.js,** try [Next.js](https://reactjs.org/docs/create-a-new-react-app.html#nextjs).
-   If you’re building a **static content-oriented website,** try [Gatsby](https://reactjs.org/docs/create-a-new-react-app.html#gatsby).
-   If you’re building a **component library** or **integrating with an existing codebase**, try [More Flexible Toolchains](https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains).

#### Create React App
Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses [Babel](https://babeljs.io/) and [webpack](https://webpack.js.org/), but you don’t need to know anything about them.

When you’re ready to deploy to production, running `npm run build` will create an optimized build of your app in the `build` folder. You can learn more about Create React App [from its README](https://github.com/facebookincubator/create-react-app#create-react-app--) and the [User Guide](https://facebook.github.io/create-react-app/).

#### CDN Links
Both React and ReactDOM are available over a [CDN](https://reactjs.org/docs/cdn-links.html.

#### [Release Channels](https://reactjs.org/docs/release-channels.html)

## Introducing JSX
React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
- Embed Expressions in JSX
- JSX is an explession too
- Can use for specifying attributes (Use camelCase)
- Tags may contain children
- Prevents Injection Attacks
	- Escapes any values embedded in JSX before rendering them so nothing is ever injected that's not explicitly written in your application
	- Everything is converted into a string befor rendering which prevents XSS (Cross-site-scripting) attacks
	- JSX Represents Objects

## Rendering Elements
- Usually rendered on div#root but can have as many isolated root DOM nodes as you like
- To render
``` jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
### Updating the rendered element
- React elements are immutable: Once you create an element, you can't change its children or attributes
	- It's like a single frame in a movie, it represents the UI at a certain point in time
	- So far (As far as we've learned) the only way to update the UI is to create a new element & pass it to `ReactDOM.render()`

### React only updates what's necessary
- Compares element & its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state
- Thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.

## Components & Props
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

### Function & Class Components
``` jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
^ Function component

``` jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
^ Class component

### Rendering a Component
Elements can represent user-defined components
``` jsx
const element = <Welcome name="Sara" />;
```
- When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

### Composing a Component
- Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.

### Extracting Components
Don't be afraid to split components into smaller components

### Props are Read-Only
- Whether you declare a component [as a function or a class](https://reactjs.org/docs/components-and-props.html#function-and-class-components), it must never modify its own props
- Such functions are called [“pure”](https://en.wikipedia.org/wiki/Pure_function) because they do not attempt to change their inputs, and always return the same result for the same inputs.
- React is pretty flexible but it has a single strict rule:

**All React components must act like pure functions with respect to their props.**

## State and Lifecycle
- State is similar to props, but it is private and fully controlled by the component.
- Four Phases
	- **initialization**
	- **mounting**
		- **componentWillMount()**
		- **componentDidMount()**
	- **updating,**
		- **shouldComponentUpdate()**
		- **componentWillUpdate()**
		- **ComponentDidUpdate()**
	- **unmounting**
		- **componentWillUnmount()**
		- 

### Adding lifecycle methods to a class
The `componentDidMount()` method runs after the component output has been rendered to the DOM.



# API Reference
## React Top-Level API
The entry point of the React Library
- Load from script tag
-  npm (ES6) `import React from 'react' `
-  npm (ES5) `var React = require('react)'`

#### Overview
##### Components
- React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
	- React components can be defined by subclassing: 
		- `React.Component`: Doesn't implement `shouldComponentUpdate()`
		- `React.PureComponent`. Implements it with a shallow prop & state comparison
			- Can provide a performance boost in some cases
			- May produce false negatives for deeper differences with complex data structures.
			- Only extend when you expect to have simple props & state, or use forceUpdate() when you know eep data structures have changed.
				- Or consider using immutable objects to facilitate fast comparisons of nested data.
			- shouldComponentUpdate() skips prop updates for the whole component subtree
			- Make sure all the children components are also "pure"
	- Can also be defined as functions which can be wrapped
	- If your component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost in some cases by memorizing the result.
		- This means that React will skip rendering the component, and reuse the last rendered result.
		- Only checks for prop changes
		- `React.memo` is a higher order component: Transforms a component into another component
		- If your function component wrapped in `React.memo` has a [`useState`](https://reactjs.org/docs/hooks-state.html), [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer) or [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) Hook in its implementation, it will still rerender when state or context change.
		- By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.
		- This method only exists as a **[performance optimization](https://reactjs.org/docs/optimizing-performance.html).** Do not rely on it to “prevent” a render, as this can lead to bugs.

##### Creating React Elements


### React.Component

#### References
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- []