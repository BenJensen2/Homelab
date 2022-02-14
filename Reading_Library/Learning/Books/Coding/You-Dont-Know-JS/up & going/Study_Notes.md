# Up & Going Study Notes

# Chapter 1: Into Programming
## Code
Program referred to as *source code* or just *code*
- Set of instructions telling a computer what to do
- Valid format of instructions is called *computer language* and *syntax*
### Statements
- Group of words, numbers, and operators that performs a specific task
	- Variables: Simple boxes you can hold stuff in
	- Literal Values (values not stored as a variable)
	- Operators (=,+,-,*,/)
	- Most end in a (`;`)

### Expressions
- Any reference to a variable or value, or a set of variables and values combined with operators

For example:

```js
a = b * 2;
```

This statement has four expressions in it:

* `2` is a *literal value expression*
* `b` is a *variable expression*, which means to retrieve its current value
* `b * 2` is an *arithmetic expression*, which means to do the multiplication
* `a = b * 2` is an *assignment expression*, which means to assign the result of the `b * 2` expression to the variable `a` (more on assignments later)
* A *general expression* is an expression that stands alone (`b * 2`) 
	* or `alert( a );`

### Executing a Program
An *interpreter* or *compiler* is used to translate the code into computer commands
- Interpreter is typically done top to bottom, line to line at runtime
- Compiler is translation done ahead of time to run later

Javascript is a compiled language
- Javascript is compiled by the engine and then immediately runs the compiled code.

Scopes & Closures ([Ch1](<../scope & closures/ch1.md>) & [Ch2](<../scope & closures/ch2.md>))
[Study Notes](<../scope & closures/Study_Notes.md>)

### Developer Console
[Mastering The Developer Tools Console](http://blog.teamtreehouse.com/mastering-developer-tools-console)

Google Chrome Developer Console

### Output
`console.log(b)`: `'console.'` is the object reference where the `'log(...)'` function is located
- Another is `'alert(b)'`

### Input
Most common is HTML input
Simple Learning `prompt(..)`
```js
age = prompt( "Please tell me your age:" );

console.log( age );
```

### Operators
* Assignment: `=` as in `a = 2`. `42 -> a` is not valid JavaScript!
	* *right-hand side* (source value), *left-hand side* (target variable).
* Math: `+` (addition), `-` (subtraction), `*` (multiplication), and `/` (division)
* Compound Assignment: `+=`, `-=`, `*=`, and `/=`
* Increment/Decrement: `++` (increment), `--` (decrement), as in `a++`
* Object Property Access: `.` as in `console.log()`.  `obj.a` like `obj["a"]`
* Equality: `==` (loose-equals), `===` (strict-equals), `!=` (loose not-equals), `!==` (strict not-equals)
* Comparison: `<` (less than), `>` (greater than), `<=` (less than or loose-equals), `>=` (greater than or loose-equals), as in `a <= b`.
* Logical: `&&` (and), `||` (or), as in `a || b` that selects either `a` *or* `b`.

[Mozilla Developer Network (MDN)'s "Expressions and Operators"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).

Values & Types ([Ch2](<../up & going/ch2.md>))

## Values & Types
* Math: `number`.
* Print a value on the screen: `string` (one or more characters, words, sentences).
* Make a decision: `boolean` (`true` or `false`).
* *Literals*: Values stored directly in code `"Hello"`, `42`,`true`
* Collection of values & Types: *arrays*, *objects*, *functions*


**Note:** JavaScript has typed values not typed variables.  Only values have types. Variables are jest simple containers for those values.
* Types
	* `string`
	* `number`
	* `boolean`
	* `null` and `undefined`
	* `object`
	* `symbol` (new to ES6)
* How to check: typeof 
	* **Bug:** `typeof null` errantly returns `"object"`.  Don't expect it to change, too much relies on it.

### Converting Between Types
* *Coercion*: Coerce between types
	* *Explicit*: `Number(..)`
	* *Implicit*: Comparing two values of not the same type `"99.99" == 99.99`
		* JavaScript will convert the left-hand side `"99.99"` to its `number` equivalent `99.99`. The comparison then becomes `99.99 == 99.99`, which is of course `true`.

([Ch2](<../up & going/ch2.md>) & [Ch4](<../types & grammar/ch4.md>))

## Code Comments
The choices you make about how to write your program matter -- not only to you, but to your other team members and even to your future self.

You should strive not just to write programs that work correctly, but programs that make sense when examined.

Some observations and guidelines are quite useful:
* Code without comments is suboptimal.
* Too many comments (one per line, for example) is probably a sign of poorly written code.
* Comments should explain *why*, not *what*. They can optionally explain *how* if that's particularly confusing.

```js
// This is a single-line comment

/* But this is
       a multiline
             comment.
                      */
```

You will definitely want to begin your learning of programming by starting off with the habit of commenting code.  
Trust me, everyone who reads your code will thank you!

## Variables

*Static Typing*: Declare a variable to hold a specific type of value.
-	Also called *type enforcement*
-	Benefit for program correctness

*dynamic typing*: Allows a variable to hold any type of value at any time.

- Benefit for program flexibility

Javascript uses *dynamic typing*


keyword `var` in every program, as it's the primary way you *declare* (aka *create*) *var*iables (see "Variables").
You should always declare the variable by name before you use it. But you only need to declare a variable once for each *scope* (see "Scope"); it can be used as many times after that as needed.


*state* is tracking the changes to values as your program runs

constants: Declaring a variable that you inted to *not change* throughout the program
- Declare these often at the top of a program.

const: ES6 rejects any changes to the variable and in "Strict Mode" will fail with an error
- That type of "Protection" is similar to the static-typing type enforcement

[Types & Grammar](<../types & grammar/README.md>)

## Blocks
Code wrapped in `{...}` usually attached to an if statement or loop
- Does not need a semicolon to conclude it.

## Conditionals
- conditional & block `(...){...}`
- if, else, switch
- coercion can occur in statements
- Falsy values: `false`, `0`, `""`
	- Anything not falsy is automatically "truthy"

Coercions ([Ch4](<../types & grammar/ch4.md>))

## Loops
- conditional & block `(...){...}`
- for, while, do..while
	- while: Condition is tested before the iteration
	- do..while: Condition is tested after the first iteration

**Warning:** Programming languages almost always count in a zero-based fashion
- [0,1,2,3,4,5]
- for loop: `(initilazation clause; conditional test clause; update clause){...}`
	- `for ( i=0 ; i<10 ; i++ ){...}`

## Functions
Clean Code
- Small
- Do One Thing
- One level of abstraction
- Use descriptive names
- Less arguements are better
- Have no side effects
- Do something or answer something but not both
- Don't repeat yourself
```js
function printAmount(amt) {
	console.log( amt.toFixed( 2 ) );
}

function formatAmount() {
	return "$" + amount.toFixed( 2 );
}

var amount = 99.99;

printAmount( amount * 2 );		// "199.98"

amount = formatAmount();
console.log( amount );			// "$99.99"
```

### Scope
- technically called *lexical scope*
- Each function gets it's own scope
- Variable names have to be unique within the same scope
- Can be nested inside another scope
	- One scope can access variables of either that scope or any scope outside of it.

Scope & Closures ([Ch1](<../scope & closures/ch1.md>), [Ch2](<../scope & closures/ch2.md>), [Ch3](<../scope & closures/ch3.md>))

## Practice
Tried it out, need to refactor for cleanliness

## Review
Basic concepts act like building blocks and you start by first putting block on top of block.

Essential programming building blocks:

* You need *operators* to perform actions on values.
* You need values and *types* to perform different kinds of actions like math on `number`s or output with `string`s.
* You need *variables* to store data (aka *state*) during your program's execution.
* You need *conditionals* like `if` statements to make decisions.
* You need *loops* to repeat tasks until a condition stops being true.
* You need *functions* to organize your code into logical and reusable chunks.

Code comments are one effective way to write more readable code, which makes your program easier to understand, maintain, and fix later if there are problems.

# Chapter 2: Into JavaScript

## Values & Types
* `string`
* `number`
* `boolean`
* `null` and `undefined`
* `object`
* `symbol` (new to ES6)

`typeof` operator

Longstanding bug in JS & one that is likely never going to be fixed
- `typeof null` returns `"object"`

Types & Grammar ([ch1](<../types & grammar/ch1.md>) & [ch2](<../types & grammar/ch2.md>))

### Objects
- Compound value where you can set properties (named locations) that each hold their own values of any type
	- One of the most useful value types in all of JavaScript.
- Can be accessed 
	- *dot notation* `obj.a` 
		- Preffered when possible
	- *bracket notation* `obj["a"]`
		- Used with special character property names
		- Useful if you want to access a property/key but the name is stored in another variable

[this & Object Prototypes](<../this & object prototypes/README.md>) ([ch3](<../this & object prototypes/ch3.md>))

#### Arrays
- An `object` that holds values of any type, not particularly in names properties/keys but rather in numerically indexed positions
- Has the `length` property
	- You could use as a normal object with your own named properties.  However, this would generally be considered improper usage of the respective types.

#### Functions
- function is an object subtype
- can have properties but typically only use object properties (like `foo.bar`) in limited cases

### Built-In Type Methods
- powerful & useful
```js
var a = "hello world";
var b = 3.14159;

a.length;				// 11
a.toUpperCase();		// "HELLO WORLD"
b.toFixed(4);			// "3.1416"
```

**Note:** What happens under the hood.  JS natives & "boxing" can be seen in [ch3](<../types & grammar/ch3.md>) of the *Types & Grammar* title of this series. Prototypes are in [ch5](<../this & object prototypes/ch5.md>) of the *this & Object Prototypes* title of this series

### Comparing Values
*equality* & *inequality*

#### Coercion
- *explicit* `Number(a)`
	- See obviously from the code that a conversion from one type to another will occur
- *implicit* `a * 1;`
	- Happens as more of a non-obvious side effect

Goes through an ordered series of steps to coerce one or both values to a different type until the types match.
- Coercion is a powerful tool *if you take the time to learn how it works.*
	- [ES5 Specification](http://www.ecma-international.org/ecma-262/5.1/)
More in Chapter 4 of the *Types & Grammar* title

#### Truthy & Falsy
- falsy
	* `""` (empty string)
	* `0`, `-0`, `NaN` (invalid `number`)
	* `null`, `undefined`
	* `false`
- Any not falsy is truthy
**Note:** Non-`boolean` value only follows this "truthy"/"falsy" coercion if it's coerced to a `boolean`.

#### Equality
- Operators
	- `==`: Value equality with coercion allowed
	- `!`: Not equal with coercion allowed
		- Coercion is a powerful tool *if you take the time to learn how it works.*
			- - [ES5 Specification](http://www.ecma-international.org/ecma-262/5.1/)
	- `===`: Value equality without coercion allowed "strict equality"
	- `!==`: Not equal (Value) without coercion allowed

Simple rules:

* If either value (aka side) in a comparison could be the `true` or `false` value, avoid `==` and use `===`.
* If either value in a comparison could be one of these specific values (`0`, `""`, or `[]` -- empty array), avoid `==` and use `===`.
* In *all* other cases, you're safe to use `==`. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

If you can be certain about the values, and `==` is safe, use it! If you can't be certain about the values, use `===`. It's that simple.

**Note:** The `==` and `===` comparison rules if you're comparing two non-primitive values, like `object`s (including `function` and `array`). Because those values are actually held by reference, both `==` and `===` comparisons will simply check whether the references match, not anything about the underlying values.

Be careful with arrays coerced to strings.
```js
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c;		// true
b == c;		// true
a == b;		// false
```

**Note:** More info ES5 specification (section 11.9.3) and also consult [Ch4](<../types & grammar/ch4.md>) of the *Types & Grammar* title of this series; see Chapter 2 for more information about values versus references.

#### Inequality
 `<`, `>`, `<=`, and `>=`
 - Similar rules as `==` comparison but not exactly
 - No strict equality without coercion
 - Can be used for numbers `3 < 4` and alphabetic rules `"bar" < "foo"`
 - If both are strings the comparison is lexicographical (alphabetical like a dictionary)
	 - If one or both is not a string, then both values are coerced to be numbers

**Note:** For more information about the inequality comparison rules, see section 11.8.5 of the ES5 specification and also consult [Ch4](<../types & grammar/ch4.md>) of the *Types & Grammar* title of this series.

## Variables
- Names must be valid *identifiers*
	- Must start with `a`-`z`, `A`-`Z`, `$`, or `_`.
- Certain words cannot be used as variables, but are OK as property names. These words are called "reserved words," and include the JS keywords (`for`, `in`, `if`, etc.) as well as `null`, `true`, and `false`.

**Note:** For more information about reserved words, see [Appendix A](<../types & grammar/apA.md>) of the *Types & Grammar* title of this series.

### Function Scopes
You use the `var` keyword to declare a variable that will belong to the current function scope, or the global scope if at the top level outside of any function.

#### Hoisting
`var` or `function` can be used throughout the whole scope in which it is declared in, even if the declaration is after it is called to use.

**Warning:** It's not common or a good idea to rely on variable *hoisting* to use a variable earlier in its scope than its `var` declaration appears; it can be quite confusing. It's much more common and accepted to use *hoisted* function declarations, as we do with the `foo()` call appearing before its formal declaration.

#### Nested Scopes
When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes

**Note:** If you try to access a variable's value in a scope where it's not available, you'll get a `ReferenceError` thrown. If you try to set a variable that hasn't been declared, you'll either end up creating a variable in the top-level global scope (bad!) or getting an error, depending on "strict mode" (see "Strict Mode")

This is a very bad practice. Don't do it! Always formally declare your variables.
- *let* declares a variable in an individual code block
	- Besides some nuanced details, scoping rules behave roughly the same as with functions
	- Block scoping is very useful for managing your variable scopes in a more fine-grained fashion, which can make your code much easier to maintain over time.

**Note:** For more information about scope, see the *[Scope & Closures](<../scope & closures/README.md>)* title of this series. See the *[ES6 & Beyond](<../es6 & beyond/README.md>)* title of this series for more information about `let` block scoping.

## Conditionals
- `if..else..if`
- `switch`
	- `case`
		- `break`: important if you want to stop execution
	- `default`
- `(condition) ? "if return" : "else return"`

**Note:** For more information about testing conditions and other patterns for `switch` and `? :`, see the *[Types & Grammar](<../types & grammar/README.md>)* title of this series.

## Strict Mode
`"use strict"`
- can be in entire file or single function: depends where you put it
- Throws ReferenceError if variable is not declared
- Get errors, better to switch now than later

**Note:** For more information about strict mode, see the Chapter 5 of the *[Types & Grammar](<../types & grammar/ch5.md>)* title of this series.

## Functions As Values
*A function itself can be a value* that's assigned to variables, or passed to or returned from other functions.
- *Named function expressions*: More preferable
- *anonymous function expressions*:  extremely common.

For more information, see the *[Scope & Closures](<../scope & closures/README.md>)* title of this series.

### Immediately Invoked Function Expressions (IIFEs)
```js
(function IIFE(){
	console.log( "Hello!" );
})();
// "Hello!"
```
- Outer `( .. )`: Nuance of JS grammar needed to prevent it from being treated as a normal function declaration.
- Final `()` on the end of the expression executes the function.

### Closure
A way to "remember" and continue to access a function's scope (its variables) even once the function has finished running.
One of the most powerful and useful techniques in all of programming

#### Modules
Modules let you define private implementation details (variables, functions) that are hidden from the outside world, as well as a public API that *is* accessible from the outside.

[Scope & Closures](<../scope & closures/README.md>)

## `this` Identifier
If a function has a `this` reference inside it, that `this` reference usually points to an `object`. But which `object` it points to depends on how the function was called.

[Ch1](<../this & object prototypes/ch1.md>) & [Ch2](<../this & object prototypes/ch2.md>) of This & Object Prototypes

## Prototypes
When you reference a property on an object, if that property doesn't exist, JavaScript will automatically use that object's internal prototype reference to find another object to look for the property on.

[Ch4](<../this & object prototypes/ch4.md>), [Ch5](<../this & object prototypes/ch5.md>), [Ch6](<../this & object prototypes/ch6.md>) of This & Object Prototypes

## Old & New

Some of the JS features we've already covered, and certainly many of the features covered in the rest of this series, are newer additions and will not necessarily be available in older browsers. In fact, some of the newest features in the specification aren't even implemented in any stable browsers yet.

There are two main techniques you can use to "bring" the newer JavaScript stuff to the older browsers: polyfilling and transpiling.

### Polyfilling
Taking the definition of a newer feature and producing a piece of code that's equivalent to the behavior, but is able to run in older JS environments.

Be careful implementing polyfills yourself.
Use vetted ones: ES5-Shim (https://github.com/es-shims/es5-shim) and ES6-Shim (https://github.com/es-shims/es6-shim).

### Transpiling
Converts newer code into older code equivalents
- Insert into build process like linter or minifier

**Note:** `undefined` is the only value that can't get explicitly passed in for a default-value parameter

Good transpiliers
* Babel (https://babeljs.io) (formerly 6to5): Transpiles ES6+ into ES5
* Traceur (https://github.com/google/traceur-compiler): Transpiles ES6, ES7, and beyond into ES5

## Non-Javascript
There are browser specific code thats not actually in the JS engine or  controlled by the JavaScript specification
- `document`
- `getElementById(...)`
- `alert(...)`
- `console.log(...)`

# Chapter 3: Into YDKJS
## Scope & Closures
JS is a compiled language that compiles right before and sometimes during execution.
- Hoisting
- Lexical scope
- Closure is the single most important concept in all of JS
- Module pattern is the most prevelant code organization pattern in all of JavaScript: deep understanding of it should be one of your highest priorities.

## this & Object Prototypes
- this
	- mistruth: `this` refers to the function it appears in
	- truth: `this` is dynamically bound based on how the function in question is executed.
		- four simple rules to understand
- object prototype: lookup chain for properties
	- mistruth: emulating (fake) classes and (so-called "prototypal") inheritance.
		- The desire to bring class & inheritance design pattern thinking to JavaScript is just about the worst thing you could try to do.
		- while syntax may trick you into thinking there's something like classes present, the prototype mechanism is fundamentally opposite in it's behavior.
	- decision: ignore the mismatch & pretend that what you're implementing is inheritance or embrace how object prototype system actually works "behavior delegation"
- behavior delegation: Entirely different, and more powerful, design pattern, one that replaces the need to design with classes & inheritance.
	- These assertions will cause disruptions of nearly every other blog post, book & conference talk on the subject for the entirety of JavaScript's lifetime.

Chapters 4-6 of the *this & Object Prototypes* title of this series.

### Other References
[Javascript Deep Dive (Github)](https://gist.github.com/romainl/db0142bf4f38109b04104f205abcbde7)
[Deep dive into Javascript Variables & this variable (Medium)](https://ishwar-rimal.medium.com/deep-dive-into-javascript-functions-function-objects-and-this-variable-9dcab5866c2e)
[A deep dive into Javascript, why it's critical to writing good code (FreeCodeCamp)](https://www.freecodecamp.org/news/a-deep-dive-into-this-in-javascript-why-its-critical-to-writing-good-code-7dca7eb489e7/)

## Types & Grammar
- Type Coercion
	- Implicit Coercion: incredibly useful tool that *yau should be using in your code*

## Async & Performance
Patterns on top of the language mechanics for managing asynchrnous programming.
- Not only critical to performance but becoming *the* critical factor in writability & Maintainability.
	- Clear up "async" "parallel" and "concurrent"
	- Callbacks: primary method of enabling asynchrony
		- Callback alone is hopelessly insufficient for the modern demands of asynchronous programming
			- *Inverrsion of Control* (IoC) trust loss
			- lack of linear reason-ability
		- ES6 introduces promises & generators to address these major deficiencies
			- Promise: Time-independent wrapper around a "future value," which letts you reaso about & compose them regardless of if the value is ready or not yet.
				- Efficiently solve IoC trust issues by routing callbacks through a trustable & composable promise mechanism.
			- Generators introduce a new mode of execution for JS functions, whereby the generator can be paused at `yield` points and be resumed asynchronously later.
				- The pause-and-resume capability enables synchronous, sequential looking code in the generator to be processed asynchronously behind the scenes. By doing so, we address the non-linear, non-local-jump confusions of callbacks and thereby make our asynchronous code sync-looking so as to be more reason-able.
			- Combination of promises & generators that "yields" the most effective asynchronous coding pattern to date in JS.
				- ES7 will build upon this foundation
				- Will need to get really comfortable with promises & generators
- Ch 5: 
	- Program parallelism with Web Workers
	- Data paralellism with SIMD
	- Low-level optimization techniques like ASM.js
- Ch 6: Performance optimization with proper benchmarking techniques
	- What kinds of performance to worry about
	- What to ignore

Taking a program from "it works" to "it works well" requires a lot of intricate and detailed planning & effort on our parts

The *Async & Performance* title is designed to give you all the tools and skills you need to write reasonable and performant JavaScript code.
### Other References
[12 tips for improving Javasript Performance ](https://nodesource.com/blog/improve-javascript-performance/)
[How to optimize Javascript Performance (Stackify)](https://stackify.com/how-to-optimize-js-performance/)
[20 best practices for improving Javascript performance (KeyCDN)](https://www.keycdn.com/blog/javascript-performance)
[Javascript performance (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Performance/javascript_performance)
[Javascript Startup Optimization (Google)](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization)
[Javascript optimization tips to improve performance in 2021 (Upwork)](https://www.upwork.com/resources/javascript-optimization-tips)
[25 Techniques for Javascript performance optimization (LinkedIn)](https://www.linkedin.com/pulse/25-techniques-javascript-performance-optimization-steven-de-salas/)
[How Javascript works, high performing code + 8 optimization tips (Sessionstack)](https://blog.sessionstack.com/how-javascript-works-high-performing-code-8-optimization-tips-cec4aab07e64)

## ES6 & Beyond
- JavaScript will ever be evolving
	- Never stop learning
	- ES6
		- New syntax
		- new data structures (collections)
		- new processing capabilities & APIs
		- destructuring
		- default parameter values
		- symbols
		- concise methods
		- computed properties
		- arrow functions
		- block scoping
		- promises
		- generators
		- iterators
		- modules
		- proxies
		- weakmaps
		- Much much more
	- Post-ES6 will most likely evolve feature by feature rather than version by version
		- Expect near-future things coming much sooner

## Review

The *YDKJS* series is dedicated to the proposition that all JS developers can and should learn all of the parts of this great language. No person's opinion, no framework's assumptions, and no project's deadline should be the excuse for why you never learn and deeply understand JavaScript.

We take each important area of focus in the language and dedicate a short but very dense book to fully explore all the parts of it that you perhaps thought you knew but probably didn't fully.

"You Don't Know JS" isn't a criticism or an insult. It's a realization that all of us, myself included, must come to terms with. Learning JavaScript isn't an end goal but a process. We don't know JavaScript, yet. But we will!

