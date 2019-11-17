# How does JavaScript work?

### What happens to our code?

JaveScript code is always hosted in an Environment (Usually a browser ie. Google Chrome, FireFox, Safari). 

When we write our JS code and we actually want to run it:

1. The host, where JS is hosted, has a JS engine that takes our code and executes it. 

The JS engine is a program that executes JS code (ie. Google V8 that is found within chrome).

In the engine: 
1. Our code is parsed by a parser (reads it line by line and makes sure that the syntax in the code is correct). The parser knows the JS rules, and if we make a mistake it throws an error and stops the execution.  
2. If the parser thinks everything is okay, then an Abstract Syntax Tree is produced. 
3. The Abstract Syntax Tree is then translated in machine code. This machine code can be executed directly by the computers processor.  
4. The computer runs the code. 

### Execution Context
All JS code needs to run in an environment (execution contexts)

Execution context: a container that stores variables in which a piece of our code is evaluated and executed.  

The default execution context is always the default “*Global Execution Context*”. 

### Global Execution Context 
* Code that is not inside any function (*any code that is not inside a function will be executed*)
* Associated with the global object 
* In the browser, thats the window object

Anything that is NOT inside a function is associated with the global object (which is `window` in a browser) 

For example: If you declare a variable, like `michael` it now becomes a property of the `window`  object. 
```
var michael = ['Michael', 'Aristocrat', '25', 'Product Manager'];
console.log(window.michael);
//["Michael", "Aristocrat", "25", "Product Manager"]
``` 


## Execution Stack
```
var name = 'Michael';

function first() {
    var a = 'Hello';
    second();
    var x = a + name;
}

function second() {
    var b = 'Hi';
    third();
    var z = c + name;
}

function third() {
    var c = 'Hey!';
    var z = c + name;
}

first();
```


Every time we call a function, it get’s it own execution context. 

`var name = 'Michael';` is not in any function, which means we’re in the *global execution context*.  This variable is stored in a global object (`window.name`).

In the example above, the function declarations are all in the global context.  We’re still in the same execution context. 

```
function first() {
    var a = 'Hello';
    second();
    var x = a + name;
}

function second() {
    var b = 'Hi';
    third();
    var z = c + name;
}

function third() {
    var c = 'Hey!';
    var z = c + name;
}
```

When we call the very first function `first();`,  we will get a new execution context.  This context is put on top of the (current) global execution context. This stacking on contexts is called the “*Execution Stack”*.

For the duration of the first execution call `first()`,  the execution context for that function becomes the active context  in which the code is executed.

```
function first() {
    var a = 'Hello';
    second();
    var x = a + name;
}
```

`var a = ‘Hello’;` is now stored in the execution context for this function `first()`. 

When the `second()` function is called,  the execution context for that function becomes the new active context in which the code is executed.  This will go above the `first()` execution context, which sits above the global execution context (`window`).  `var b= Hi;` is stored in this execution context. 

```
function second() {
    var b = 'Hi';
    third();
    var z = c + name;
}
```

When the `third()` function is called,  the execution context for that function becomes the new (new) active context in which the code is executed.  This will go above the `second()` execution context which is above the  `first()` execution context, which sits above the global execution context (`window`).  Inside the third function, we only have two declarative variables and nothing more. So the function there has done its work,  and so we say the function returns. 

At this point, `third()`  ’s execution context get’s removed from the stack.  Then the `second()` context,  which called the `third ()` function is now the active context. 

The `var z = c + name;` is now stored in the execution context,  and since its declarative, the function returns. The `second()` execution context is now off the stack. The first function is back to being the active execution context. 

The `var x = a + name;` becomes stored in the execution context,  which Is declarative. Since there isn’t anything else to do, the function returns.  Making the global execution context the active context.

### How are the execution contexts created? 
### Why are execution contexts so important?

You can associate an execution context with an object.  This object has three properties:

1. The variable object: contains: function arguments, inter variable declarations and function declarations. 
2. The scope chain: contains: current variable objects as well as all the variable objects of its parents. 
3. The “this” variable

When a function is called, a new execution context is put on top of the execution stack. 

This happens in two phases: 

(1) Creation phase:
First, we have the creation of the variable object. 
Second, the creation of the scope chain. 
Third, the this variable is determined in set. 

At this point, the properties of the execution context object are defined. 

(2) Execution phase:
The code of the function that generated the current execution context is ran line by line.  All the variables are defined.  If its the global context, then its the global code that get’s executed.  Which is pretty much everything that is not in a function. 

### The creation of the variable object

* The argument object is created, containing all the arguments that were passed into the function. 

* The code is scanned for function declarations: for each function, a property is created in the variable Object, pointing to the function. *This means, all the functions will be stored in the variable object,  even before the code starts executing.* (related to hoisting)

* The code is scanned for variable declarations: for each variable, a property is created in the variable Object and set to `undefined`.(related to hoisting)

### What is hoisting? 

Functions and variables are hoisted in JavaScript,  which means they’re available before the execution phase starts. Functions are already defined before the execution starts, which is why when a property is created in the variable Object, it can point to the function.  Variables on the other hand, are set to undefined and are only defined in the execution phase. 

Note: Each execution context has an object which stores a lot of important data that the function will use when its running. This happens even before the code is executed. 

Hoisting example: 
```
calculateAge(1991); // 28

/*this is a function declaration
this will be hoisted to the context object
which in this case is the global execution
context */

function calculateAge(year) {
    console.log(2019 - year);
}

retirement(1994); // retirement is not a funtion


/*this is a function expression
and is not hoisted to the active
execution context therefore will
not run if you try to call it before
the code */

var retirement = function(year) {
    console.log(65 - (2019 - year));
}

```

`Remember: options + command + J to open console`

Example of hoisting with variables. 
```
console.log(age) // undefined (basically var age;)
var age = 23; 
console.log(age) // 23 
```

Here you can see that, if the variable is declared and if the variable is called before it’s define, an error isn’t thrown but the variable appears undefined. Remember, variables that don’t have a value yet have the value `undefined`. This will not work if there is no variable declared. 

Another example: Two age variables defined in different execution contexts
```
/*this age variable is stored 
in the global execution context object*/
var age = 23; 

function foo() {
    var age = 65;
    /*this age variable is stored 
    in the foo execution context object*/
    console.log(age); //65
}

foo();
console.log(age); //23 
```


## The power of hoisting is when we can use functions before we even declare them in our code. 
























