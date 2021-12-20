# Scope & Closures Study Notes

# Chapter 1: What is a Scope?

*State*: Most fundamental paradigm is to store values in variables & later retrieve & modify those values.
*Scope*: Well defined set of rules for storing variables in some location and for finding those variables at a later time

## Compiler Theory
JavaScript is a compiled language
- it is *not* compiled well in advance
- nor are the results of the compilation portable among various distributed systems

Traditional compiled-language process: Chunk of source code undergoes three steps before it is executed:
1. **Tokenizing/Lexing:** breaking up a string of characters into meaningful (to the language) chunks, called tokens.
	1. `var a = 2;` into `var`, `a`, `=`, `2`, abe `;`.
	2. Whitespace may or may not be persisted, depending on weather it's meaningful or not.
	**Note:** The difference between tokenizing and lexing is subtle and academic, but it centers on whether or not these tokens are identified in a *stateless* or *stateful* way. Put simply, if the tokenizer were to invoke stateful parsing rules to figure out whether `a` should be considered a distinct token or just part of another token, *that* would be **lexing**.
2. **Parsing:** taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This tree is called an "AST" (<b>A</b>bstract <b>S</b>yntax <b>T</b>ree).
3. **Code-Generation:** the process of taking an AST and turning it into executable code.
**Note:** The details of how the engine manages system resources are deeper than we will dig, so we'll just take it for granted that the engine is able to create and store variables as needed.

Compilation happens in microseconds or less.

## Understanding Scope
*Scope*: the set of rules that govern how the *Engine* can look up a variable by its identifier name and find it, either in the current *Scope*, or in any of the *Nested Scopes* it's contained within.


### The Cast
1. *Engine*: responsible for start-to-finish compilation and execution of our JavaScript program.

2. *Compiler*: one of *Engine*'s friends; handles all the dirty work of parsing and code-generation (see previous section).

3. *Scope*: another friend of *Engine*; collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code.

To Fully understand: *think* like *Engine* (and friends) think

### Back & Forth

*Compiler* will proceed as:
1. Encountering `var a`, *Compiler* asks *Scope* to see if a variable `a` already exists for that particular scope collection. If so, *Compiler* ignores this declaration and moves on. Otherwise, *Compiler* asks *Scope* to declare a new variable called `a` for that scope collection.

2. *Compiler* then produces code for *Engine* to later execute, to handle the `a = 2` assignment. The code *Engine* runs will first ask *Scope* if there is a variable called `a` accessible in the current scope collection. If so, *Engine* uses that variable. If not, *Engine* looks *elsewhere* (see nested *Scope* section below).

If *Engine* eventually finds a variable, it assigns the value `2` to it. If not, *Engine* will raise its hand and yell out an error!

To summarize: two distinct actions are taken for a variable assignment: First, *Compiler* declares a variable (if not previously declared in the current scope), and second, when executing, *Engine* looks up the variable in *Scope* and assigns to it, if found.

### Compiler Speak
*Engine* looks up variable `a` with Left-hand Side or Right-hand Side look-up.  Side **Of an assignment operation.**
- LHS is trying to find the variable container itself "who's the target of the assignment"
- RHS just means not left-hand side "who's the source of the assignment"

```js
function foo(a) { // Hidden LHS a = 2 when function is passed arguement.
	console.log( a ); // 2 RHS
}

foo( 2 ); RHS
```

### Engine/Scope Conversation
Good to read


### Building on Metaphors
Scope uses a nested *Scope* rule set until it gets to the global scope.

## Errors
- RHS can't find a variable: `ReferenceError`
- LHS can't find a variable: Global *Scope* will create a new variable & hand it back to *Engine*
- "Strict Mode" disallows the automatic/implicit global variable creation.
	- Engine would throw a `ReferenceError`
- If a variable is found but you try to do something impossible with it's value, it throws a `TypeError`
- `ReferenceError` is *Scope* resolution-failure related whereas `TypeError` implies that *Scope* resolution was successful but that there was an illegal/impossible action attempted against the result

Scope is the set of rules that determines where and how a variable (identifier) can be looked-up. This look-up may be for the purposes of assigning to the variable, which is an LHS (left-hand-side) reference, or it may be for the purposes of retrieving its value, which is an RHS (right-hand-side) reference.

LHS references result from assignment operations. *Scope*-related assignments can occur either with the `=` operator or by passing arguments to (assign to) function parameters. This is implicitly assigned to the function parameter.

The JavaScript *Engine* compiles code before it executes.
LHS & RHS reference look-ups start at the currently executing *Scope* then work outward through the nested scopes until they reach the global scope.

I Got the Quiz Answers right!!

# Chapter 2: Lexical Scope

**Lexical Scope:** Scope defined at lexing time.
- What JavaScript uses
**Dynamic Scope** [Appendix A](./apA.md)

## Lex-time
- Scope bubbles: Where blocks of scope are written.
	- Strictly nested: can't simultaneously exist inside two other outer scope bubbles

## Look-ups
**Scope look-up stops once it finds the first match**
- Shadowing: Whet the same identifier name is specified at multiple layers of nested scope.
**Note:** Global variables are also automatically properties of the global object (`window` in browsers, etc.), so it *is* possible to reference a global variable not directly by its lexical name, but instead indirectly as a property reference of the global object.

```js
window.a
```
- Lexical scope is **only** defined by where the function was declared
	- Only applies to first-class identifiers such as `a` `b` `c`
	- Referencing `foo.bar.baz` would use lexical scope to look-up `foo` but object property-access rules after

## Cheating Lexical (Frowned upon)

- Leads to poorer performance
- `eval` takes a string as an arguement and treats the contents as if it had actually been authored code at that point in the program.
- Modifies the existing scope in which the `eval(..)` resides
- `setTimeout(..)` and `setInterval(..)` can do the same
	- `new Function(..)` can as well with a string of code in its **last** argument

**Note:** `eval(..)` when used in a strict-mode program operates in its own lexical scope, which means declarations made inside of the `eval()` do not actually modify the enclosing scope.
a
### With
The `with` statement takes an object, one which has zero or more properties, and **treats that object as if *it* is a wholly separate lexical scope**, and thus the object's properties are treated as lexically defined identifiers in that "scope".

```js
var obj = {
	a: 1,
	b: 2,
	c: 3
};

// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;

// "easier" short-hand
with (obj) {
	a = 3;
	b = 4;
	c = 5;
}
```

**Note:** Even though a `with` block treats an object like a lexical scope, a normal `var` declaration inside that `with` block will not be scoped to that `with` block, but instead the containing function scope.

**Note:** `with` is disallowed in Strict Mode

### Performance
*Engine* performs many optimizations during compilation.

`eval(..)` or `with`, engine has to assume awareness of identifier location may be invalid so it performs no optimizations

## Review
- Lexical Scope
- Don't cheat

# Chapter 3: Function vs. Block Scope
## Scope from functions
- Each function creates a bubble for itsely
	- **It doesn't matter** *where* in the scope declarations appear, the variable or function belongs to the containing scope bubble. regardless.

## Hiding in Plain Scope
**Goes against Clean Code):** Can be put into practice with nesting functions
- You shoulde expose only what is minimally necessary aned "hide" everything else

### Collision Avoidance
- Hiding code avoids  unintended collisions between two different identifiers with the same name but different intended usages

#### Module Management
Can also avoid collision with the "module" approach

## Functions As Scopes
Function Expression `(function foo(){ .. })`
Hiding foo inside itself means it does not pollute the enclosing scope unnecessarily'

### Anonymous vs. Named (Best Practice to name)
- Anonymous function expression has no name idetifier on it `function()...`.
	- Function declarations cannot omit the name (illegal in JS grammar)
- Downsides
	- No useful name to display in stack traces (Can make debugging more difficult)
	- If it needs to refer to itself `arguments.callee` reference is unfortunately required.
	- Omit a nome that is often helpful in providing more readable/understandable code. A descriptive name helps self-document the code in question.

### Invoking Function Expressions Immediately
- `(function foo(){ .. })()` or `(function(){ .. }())`
- **IIFE**, which stands for **I**mmediately **I**nvoked **F**unction **E**xpression.
- ```js undefined = true; // setting a land-mine for other code! avoid! ```

## Blocks as Scopes {...}
- On the surface, JavaScript has no facility for block scope
- Explicit is better than implicit

### `with` (Frowned Upon)
### `try/catch`
- `catch` clause of `try/catch` is scoped to the `catch` block
- `err` exists only in nthe `catch` clause and throws an error when you try to reference it elsewhere
**Note:** If you have two or more `catch` clauses in the same scope, many linters seem to still complain
-	Tip: Name `catch` variables `err` and `err2` or turn off linting check for duplicate variable names
-	See [Appendix B](./apB.md) for more info and usefulness

### `let`
- The `let` keyword attaches the variable declaration to the scope of whatever block (commonly a `{ .. }` pair) it's contained in.
- See [Appendix B](./apB.md) for another way to express explicit block scopes
- Hoisting in Chapter 4
- `let` will not hoist

#### Garbage Collection
Block scoping can help make it clearer to the engine that it does not need to keep certain variables around

#### `let` Loops
- For loop: binds `i` to the for-loop body and **re-binds it** to each *iteration* of the loop , making sure to re-assign it the value from the end of the previous loop iteration.

### 'const'
- Block scoped variable whose value is fixed (constant).
- Any attempt to change at a later time results in an error.

## Review
- Functions are most common unit of scope in JavaScript
	- They are essentially "hidden" from any of the enclosing "scopes"
- Block-scope refers to the idea that variables and functions can belong to an arbitrary block (generally, any `{ .. }` pair) of code, rather than only to the enclosing function.
- `catch` is block-scoped in `try/catch`
- `let` attaches itself to the scope it is called in
- Should use both block & function scope

# Chapter 4: Hoisting
## The Compiler Strikes Again
- "Engine" compiles JavaScript code before it interprets it.
	- Finds & associates all declarations with their appropriate scopes which is the heart of [Lexical Scope](./ch2.md)
- All declarations, both variables & functions are processed first, before any code is executed.
- Variable & function declarations, not expressions, are "moved" to the top of the code
	- "Hoisting"
	- **Note:** Only the declarations themselves are hoisted, while any assignments or other executable logic are left *in place*.
	- **per-scope** only gets hoisted in its respective scope
	- Function declarations are hoisted but Function expressions are not.

## Functions First
- Subtle detail that *can* show up in code with multiple "duplicate" declarations is that functions are hoisted first, then variables
- Subsequent function declarations *do* override previous ones.
- Duplicate definitions in the same scope are a really bad idea & will often lead to confusing results.
- Function declarations that appear inside of normal blocks typically hoist to the enclosing scope, rather than being conditional as this code implies:
	- However, it's important to note that this behavior is not reliable and is subject to change in future versions of JavaScript, so it's probably best to avoid declaring functions in blocks.

# Chapter 5: Scope Closure
- What React is based upon (Class & Functional)
## Nitty Gritty
- When a function is called outside of it's lexical scope, it still has access and will be processed with the lexical scope in which the function was defined.

``` js
function outerFunc() {
	let outerVar = 'I am outside!';
	function innerFunc() {
		console.log(outerVar); // => logs "I am outside!"
	}
	return innerFunc;
}

function exec() {
	const myInnerFunc = outerFunc();
	myInnerFunc();
}

exec();
```
- `innerFunc` is returned from `outerFunc` and called in `exec()` outside if it's declared lexical scope but still has access to it's declared lexical scope to print 'I am outside!';
- *Whenever* and *wherever* you treat functions (which access their own respective lexical scopes) as first-class values and pass them around, you are likely to see those functions exercising closure.
	- Be that timers, event handlers, Ajax requests, cross-window messaging, web workers, or any of the other asynchronous (or synchronous!) tasks, when you pass in a *callback function*, get ready to sling some closure around!
- IIFE is not closure, it gets invoked right away in it's respective scope
	- Though an IIFE is not *itself* an example of closure, it absolutely creates scope, and it's one of the most common tools we use to create scope which can be closed over. So IIFEs are indeed heavily related to closure, even if not exercising closure themselves.
- 
- A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**).
- _The closure_ is a function that accesses its lexical scope even executed outside of its lexical scope.
- Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
- Any of the various ways that functions can be *passed around* as values, and indeed invoked in other locations, are all examples of observing/exercising closure.
- Whatever facility we use to *transport* an inner function outside of its lexical scope, it will maintain a scope reference to where it was originally declared, and wherever we execute it, that closure will be exercised.

## Loops + Closure
**Note:** Linters often complain when you put functions inside of loops, because the mistakes of not understanding closure are **so common among developers**.
- Need a new scope created for each iteration, use IIFE
```js
for (var i=1; i<=5; i++) {
	(function(j){
		setTimeout( function timer(){
			console.log( j );
		}, j*1000 );
	})( i );
}
```

or 

```js
for (var i=1; i<=5; i++) {
	let j = i; // yay, block-scope for closure!
	setTimeout( function timer(){
		console.log( j );
	}, j*1000 );
}
```

### Block Scoping Revisited
`let` for the win!

```js
for (let i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}
```

## Modules
Modules have to be invoked for there to be an instance created
- Creates a **public API for the module**
- It is not required to return an actual object (literal) from a module, the inner functions could just be returned directly
- Two "requirements" for the module pattern to be exercised:
	- Outer enclosing function invoked at least once (each time creates a new module instance)
	- Enclosing function mus return back at least one inner function
		- So the inner function has closure over the private scope, and can access and/or modify that private state.
- Can create a "singleton" with IIFE to *immediately* invoke it & assign its return value directly.

**Note** An object with a function property on it alone is not *really* a module. An object which is returned from a function invocation which only has data properties on it and no closured functions is not *really* a module, in the observable sense.

### Modern Modules: Example
### Future Modules
- ES6 adds first-class syntax support for the concept of modules.
- When loaded via the module system, ES6 treats a file as a separate module.
- Each module can both import other modules or specific API members, as well export their own public API members.
- **Note:** Function-based modules aren't a statically recognized pattern (something the compiler knows about), so their API semantics aren't considered until run-time. That is, you can actually modify a module's API during the run-time (see earlier `publicAPI` discussion).
- ES6 modules **do not** have an "inline" format, they must be defined in separate files (one per module).
	- The browsers/engines have a default "module loader" (which is overridable, but that's well-beyond our discussion here) which synchronously loads a module file when it's imported.
- `import` imports one or more members from a module's API into the current scope, each to a bound variable

## Review
**Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.**

Closures can trip us up, for instance with loops, if we're not careful to recognize them and how they work. But they are also an immensely powerful tool, enabling patterns like *modules* in their various forms.

Modules require two key characteristics: 1) an outer wrapping function being invoked, to create the enclosing scope 2) the return value of the wrapping function must include reference to at least one inner function that then has closure over the private inner scope of the wrapper.