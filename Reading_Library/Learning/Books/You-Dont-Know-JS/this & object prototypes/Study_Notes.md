# *this* & Object Prototypes
# Chapter 1: `this` Or That?
- `this` mechanism provides a more elegant way of implicitly "passing along" an object reference, leading to cleaner API design and easier re-use.
	- Creates a global variable
	- Run-time binding, not an author-time binding
- Don't avoid it, embrace it
- `this` does not it any way refer to a function's **lexical scope**
	- **There is no bridge** between lexical scope look-ups with `this`
- Has nothing to do where the function is declared but everything to do in which the function is called.
- When a function is invoked, an activation record, otherwise known as an execution context, is created.  Contains:
	- Where the function was called from (the **call-stack**)
	- *how* the function was invoked
	- What parameters were passed
	- One of the properties of this record is `this` reference which will be used for the duration of that function's execution
- `this` is actually a binding that is made when a function is invoked, and *what* it references is determined entirely by the call-site where the function is called.

# Chapter 2: `this` All Makes Sense Now!
## Call-site
- Call-site: the location in code where a function is called, not declared.
- **call-stack:** (the stack of functions that have been called to get us to the current moment in execution).
	- Use developer tools to place breakpoint in function & read

## Nothing But Rules
Inspect the call-site and determine which of 4 rules applies.

### 1. Default Binding
- Most common case of function calls: standalone function invocation.
- Default catch-all rule when none of the other rules apply