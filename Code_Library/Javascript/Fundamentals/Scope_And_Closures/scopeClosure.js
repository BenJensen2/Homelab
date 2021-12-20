// Example: https://dmitripavlutin.com/simple-explanation-of-javascript-closures/
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

console.trace()

function foo() {
  // The function scope
  let count = 0;
  console.log(count); // logs 0
}
foo();
// console.log(count); // ReferenceError: count is not defined

function foo2() {
  // "foo2" function scope
  let count = 0;
  console.log(count); // logs 0
}
function bar() {
  // "bar" function scope
  let count = 1;
  console.log(count); // logs 1
}
foo2();
bar();

// Scope Nesting
function outerFunc() {
  // the outer scope
  let outerVar = "I am outside!";
  function innerFunc() {
    // the inner scope
    console.log(outerVar); // => logs "I am outside!"
  }
  innerFunc();
}
outerFunc();

// Nested Lexical
const myGlobal = 0;
function func() {
  const myVar = 1;
  console.log(myGlobal); // logs "0"
  function innerOfFunc() {
    const myInnerVar = 2;
    console.log(myVar, myGlobal); // logs "1 0"
    function innerOfInnerOfFunc() {
      console.log(myInnerVar, myVar, myGlobal); // logs "2 1 0"
    }
    innerOfInnerOfFunc();
  }
  innerOfFunc();
}
func();

function outerFuncClosure() {
  let outerVarClosure = "I am outside in Closure!";
  function innerFuncClosure() {
    console.log(outerVarClosure); // => logs "I am outside!"
  }
  return innerFuncClosure;
}
function exec() {
  const myInnerFuncClosure = outerFuncClosure();
  myInnerFuncClosure();
}
exec();

// Loops & Closure
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

for (var i = 1; i <= 5; i++) {
  (function () {
    setTimeout(function betterTimer() {
      console.log(i);
    }, i * 1000);
  })();
}

// New function fires for each loop and creates a new scope with a different value for j=i
for (var i = 1; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })();
}

// Another way to do it, can use any variable, including i
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
