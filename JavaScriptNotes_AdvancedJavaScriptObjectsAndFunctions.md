# Advanced JavaScript: Objects and Functions
Everything is an object. This is almost correct but not always correct. 

## What is considered an object in javascript?

Everything in javascript is considered an object, except for primitives. 

Primitives include datatypes such as Numbers, Strings, Booleans, Undefined, Null. 

Objects could be Arrays, Functions, Objects, Dates, Wrappers for Numbers, Strings, Booleans. 

Objects are not for just storing a bunch of data, but for really complex things for under the surface. 

Objects make JavaScript unique to other programming languages. 

## What is Object Oriented Programming?
Makes heavy use of Objects, properties and methods. These Objects interact with each other to form complex applications.

Objects are used to store data, structure applications into modules and for keeping code clean. 

## Class Vs Constructor Vs Prototype Vs Instances
The constructor acts like a blueprint that creates object instances. The prototype is the special property that allows for the “transfer” of methods and properties. 

The prototype of a particular constructor, is not the property of that constructor but rather the property of all the instances of the constructor. 

“The Person (constructor) prototype property, is the prototype property of john (instance)”

“The person object itself is an object of a bigger constructor, which is the Object object, 

Each and every constructor/object we create, is an instance of the Object object, which has many of its own methods and prototypes. All its children inherit the methods and properties found in its prototype. 

You put the things in the prototype property that you want other objects to inherit. 

## Prototype chain
When we try and access a certain method or property in an Object, JavaScript will first look for the method in the object, if it cannot find it, it will look in the Objects prototype, which is the prototype property of its parent. It moves up in the prototype chain. It does this until it gets to null which has no prototype (comes after the Object Object). 

## What is Inheritance? 

Its when object is based on another object. When an object gets access to another objects properties. 

JaveScript is a ProtoType based language, that means inheritance works by using something called prototypes. 

That means each JavaScript Object has a Prototype property. 

The prototype property of an object is where we put methods and properties that we ant other objects to inherit. 

The Constructor’s prototype property is NOT the prototype of the Constructor itself, its the prototype of ALL instances that are created through it. ????

When a certain method, or property, is called, the search starts in the object itself, and it cannot be found, the search moves on to the object’s prototype. This continues until the method is found. This act of moving up the ancestry ladder is called the prototype chain. 


## Creating Objects using the function constructor
Function Constructor 
* Implies were going to use a function. 
* **In JavaScript, it is common notation to write the function constructor with a capital letter.** 

Example:

```
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth; 
	this.job = job; 
}
```

```
var john = new Person('John', 1990, 'Teacher');
```

What does the New operator do?

1. First a brand new empty object is created. 
2. The constructor function, in this case `Person`, is called with the arguments that we specified. 
3. Calling a function creates a new execution context, which also has a `this` variable. The `new`operator ensures that `this` points to the new object that was create when new was initially used. 

Inheritance Example;

First: Let’s create a Function constructor 
```
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth; 
	this.job = job; 
	this.calculateAge = function () {
		console.log(2019 - yearOfBirth);
	}
}
```

Second: Let’s create an instance of this Person object 
```
var michael = new Person('Michael', 1994, 'Product Manager');
```

Alright, lets calculate the age. 

```
michael.calculateAge();
```

We get 25 printed in the console! Awesome. 

Third: Lets console the Michael instance of the person object

```
calculateAge: /ƒ ()/
job: “Product Manager”
name: “Michael”
yearOfBirth: 1994
```

Okay, that’s great! Everything worked fine. Now imagine that we had 100 different function properties in the Person Object. Do we want to see each of those printed in the console? Probably not. 

So what can we do? Well we can use the prototype property. 

Our Person object becomes this: 
```
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth; 
	this.job = job; 
}
```

How can we add the function into the prototype property? 

```
Person.prototype.calculateAge = function () {
		console.log(2019 - this.yearOfBirth);
	};
```

Note: when the function is in the Object, then  it requires a `this`. In the case of prototypes, the `this` must be applied to the value. 

So what happens when we calculate age and console log the object? 

```
michael.calculateAge();
console.log(michael)
```

Well, we end up with 25 as the printed value, which means the function is accessible (via prototypes) and the  Object looks like so: 

```
job: “Product Manager”
name: “Michael”
yearOfBirth: 1994
``` 

You will notice that `calculateAge` is not seen anymore as a property of the Michael instance. You can see it however, in the `__proto__: Object`.  You will need to console.log to see exactly what I mean by this.

Notes:
* Methods seem to be most commonly found in the prototype property

Another Example:

```

var ColorDisplay = function(firstColor, secondColor, thirdColor) {
	this.firstColor = firstColor;
	this.secondColor = secondColor;
	this.thirdColor = thirdColor;
}

ColorDisplay.prototype.printAllColor = function () {
	console.log(this.firstColor, this.secondColor, this.thirdColor)
}

var lightColors = new ColorDisplay("yellow", 'baby blue', 'pink');
```

### The Prototype Chain in the Console

Console.log(Michael)
```
Person {name: "Michael", yearOfBirth: 1994, job: "Product Manager"}
```

Now if you expand it you end up with something like this:
```
* /Person {name: “Michael”, yearOfBirth: 1994, job: “Product Manager”}/
	* job: “Product Manager”
name: “Michael”
yearOfBirth: 1994
__proto__:
		* calculateAge: /ƒ ()/
constructor: /ƒ (name, yearOfBirth, job)/
__proto__: Object
```

Now if you expand proto again, you get something like this; 

```
Person {name: “Michael”, yearOfBirth: 1994, job: “Product Manager”}/
	* job: “Product Manager”
name: “Michael”
yearOfBirth: 1994
__proto__:
		* calculateAge: /ƒ ()/
constructor: /ƒ (name, yearOfBirth, job)/
__proto__:
			* constructor: /ƒ Object()/
hasOwnProperty: /ƒ hasOwnProperty()/
isPrototypeOf: /ƒ isPrototypeOf()/
propertyIsEnumerable: /ƒ propertyIsEnumerable()/
toLocaleString: /ƒ toLocaleString()/
toString: /ƒ toString()/
valueOf: /ƒ valueOf()/
__defineGetter__: /ƒ __defineGetter__()/
__defineSetter__: /ƒ __defineSetter__()/
__lookupGetter__: /ƒ __lookupGetter__()/
__lookupSetter__: /ƒ __lookupSetter__()/
get __proto__: /ƒ __proto__()/
set __proto__: /ƒ __proto__()/

```

When you expand `__proto__` the first time. You see the prototype properties of the `Person` function constructor. When you expand the second  `__proto__` , you will see the prototype properties of the Object function constructor.  So, the Person function constructor, is actually an instance of the Object function constructor. The object `michael` has access to all of the methods that the Object, and Person function constructor have.

What this is showing is, the prototype chain in the console. Each object has access to its ancestors prototypes. 

If you run the following in the console, you get true. 
```
michael.__proto__ === Person.prototype
///true
```

This indicates that, the prototype of `michael` is the prototype property of `Person` function constructor.

### Everything is an Object

In the console, if you were to write out an array like `var x = [1, 2 , 3]` then `console.info(x)` you will see that it has properties. One of which is length. If you look at the `__proto__` you will see there array specific methods its inherited from the Object function constructor. 


## Object.create vs Function Constructor
Another way we can create objects that inherit from a prototype. 

`Object.create` allows us to implement really complex inheritance structures in an easier way compared to Function contractors.  Because it allows us to specify which object should be a prototype. 

### How to use Object.create 
1. First define the object that will act as the prototype
2. Then create the new object based on that Prototype

First write the prototype as a simple object.
Don't capitalize the first letter because it's not a function constructor.

```
/*Object.create 

*/
var personProto = {
	calculateAge: function() {
		console.log(2016 - 
			this.yearOfBirth);
	}

};

var michael = Object.create(personProto);
// in the console, we can see that there is an empty object,
// however, in the prototype property we can see the calculateAge function available\

michael.name = 'Michael';
michael.yearOfBirth = 1994;
michael.job = 'Product Manager';

```

We end up with something like this. 

```
name: “Michael”
yearOfBirth: 1994
job: “Product Manager”
__proto__:
		* calculateAge: /ƒ ()/
__proto__: Object
```

Create.object actually takes in a second parameter, which can be the properties we want in the Object itself. 

```
var personProto = {
	calculateAge: function() {
		console.log(2016 - 
			this.yearOfBirth);
	}
};

var michael = Object.create(personProto, {
	name: { value: 'Michael'},
	yourOfBirth: { value: 1994},
	job: { value: 'Product Manager'}
});
```

It looks kind of funny, but that’s how you do it.  We will end up with something like this in the console.

```
name: “Michael”
yearOfBirth: 1994
job: “Product Manager”
__proto__:
		* calculateAge: /ƒ ()/
__proto__: Object
```

Object.create builds an object that inherits directly from the first argument we put into the function. Where as the function constructor method, the newly create object inherits from the constructors prototype property. 

_Object.create enables the developer to be more specific with the inheritances objects get._ 

## Primitives Vs Object
Primitives seem to be more “mutable” and there can be several “copies” of the particular primitive. For example, you may have variable `a` found in the global object and `a` in a function. Both `a` variables exist. Which means a could have several values.  Each variable holds their own copy of the data. 

Example:

```
// Primitives 
var a = 23; 
var b = a; 
a = 46; 

console.log(a); // 46
console.log(b); // 23
```

When you do something similar with Objects, you get a difference behaviour. 

```
// Objects 
var obj1 = {
	name: "Michael",
	age: 25
};

var obj2 = obj1;
obj1.age = 30; 

console.log(obj1.age); //30
console.log(obj2.age); //30
```

When we said `obj1 = obj2`, no copies were created. What happened was a new reference was created. Each reference `obj1` and `obj2` points to the same spot in the memory. 

So how does this play out in functions? 

```
// Functions 
var age = 25; 
var obj = {
	name: 'Michael',
	city: 'Toronto'
}

function change(a, b) {
	a = 30;
	b.city = 'London'
};

change(age, obj);

console.log(age); // 25
console.log(obj.city); // London
```

So we created a function that takes in two parameters.  We used a primitive (`age`) and an object (`obj`). When we console.log the arguments we used, we can see that `age` did not change but `obj` did. That is because change created a copy of the primitive `age` but referenced the `obj`. That means `obj` did change but the `age` variable found in the global object did not since `change()` create a copy of `age` and did not reference the original `age`. 

When using objects as arguments, we don’t pass the object itself into a function but rather the reference to the object. 


## Example of functions as arguments into other functions

```
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrResult = [];
	for (var i = 0; i < arr.length; i++) {
		arrResult.push(fn(arr[i]));
	}
	return arrResult;
}

// call back functions 
//= functions that are passed into another function 

function calculateAge(el) {
	return 2020 - el; 
}

function isOfAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
	return Math.round(2006.9 - (0.67 * el)); //el is age
	} else {
		return -1;
	}

}

ages = arrayCalc(years, calculateAge);
ofAge = arrayCalc(years, isOfAge);
rates = arrayCalc(ages, maxHeartRate);
 
console.log(ages);// [30, 55, 83, 15, 22]
console.log(ofAge); // [true, true, true, true, true]
console.log(mHR); // [1987, 1970, -1, -1, 1992]
``` 


## Example of Functions Returning Functions
```
// A function that creates different interview qs for different jobs 

function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ", can you please example what UX design is?");

		}
	} else if (job === 'teacher') {
		return function (name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}


var teacherQuestion = interviewQuestion('teacher');
//this variable teacherQuestion will now be the function related to teacher


teacherQuestion('Michael');// What subject do you teach, Michael?
/* basically, we can create on generic function, 
then create multiple functions from that function using arguments*/

var designerQuestion = interviewQuestion('designer');
designerQuestion('Michael'); //Michael, can you please example what UX design is?
designerQuestion('Dan'); // Dan, can you please example what UX design is?
designerQuestion('Taylor'); //Taylor, can you please example what UX design is?


/* We can do it even simpler
instead of using:
var teacherQuestion = interviewQuestion('teacher');
We can bypass the need to create another variable like so */

interviewQuestion('teacher')('Michael') //What subject do you teach, Michael?
```


## Immediately Invoked Function Expressions (IIFE)

What’s inside parenthesis is not a statement but rather an expression. 

```
/*
Imagine we want to build a-little game if we win 
a the game if we get a score 0-5 and lose 
otherwise, but we want to keep the score hidden. 

The answer could be to build a simple function. 
The score within the function wouldn't be 
accessible because of the scope chain. 
*/

function game() {
	var score = Math.random() * 10;
	console.log(score >=5);
}

game();

/*
If the only purpose of the function is to hide 
the variable from outside the function, which means
creating a private variable, then we don't need to declare a whole function
with a name then call it, we can do it in a better way 
Thats with the IIFE. 

This is what an IIFE looks like..

1. Start with some parenthesis
2. Then write the function, without the name (anonymous)
3. Then invoke the function 

*/

(function () {
	var score = Math.random() * 10;
	console.log(score >=5);
})();

/*
How does this work? 

if we wrote something like this... 


function () {

}

The JS parser will think its a function declaration, 
however since it's lacking a name, it will throw an error. 

So we need to trick the parser, and make it believe we have an expression
and the solution is to write everything in parenthesis, 
BC in JS whatever is in parenthesis is not a statement, and 
it will treat it like an expression. 

(function() {

})();


We can also write arguments into the IIFE
*/

(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >=5 - goodLuck);
})(5);

/*
Note: It can only be used once, 
it is not re-usable. Thats fine. Whats important, 
and why we use an IIFE is to create a new scope that is hidden
from the outside scope. We get data privacy this way, and also 
don’t interfere with the global scope. 

*/
```


## What are closures? 
A closure describes a situation where an inner function has access to the variables and parameters of the outer function, even after the function has returned. 

Closures show us that the execution stack is not directly related to the scope chain, since a function can return but its variables (the variable objects) are still accessible if they for example the executed function 
returns a function. 

The variables of the first function are stored in a variable object
that is accessible by the function written lexically to the executed function. 
```
// Closures
function retirement(retirementAge) {
	var a = ' years left until retirement'; 
	return function(yearOfBirth) {
		var age = 2020 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
retirementUS(1990); //36 years left until retirement

retirement(66)(1990); //36 years left until retirement


//Tried to modify the above to better understand how closures work

function retirement(retirementAge) {
	var a = ' years left until retirement'; 
	temp(yearOfBirth) 
}

function temp(yearOfBirth) {
	var age = 2020 - yearOfBirth;
	console.log((retirementAge - age) + a);
}
retirement(66)(1990)

//ReferenceError: yearOfBirth is not defined

/*
```

```
// Closures

function retirement(retirementAge) {
	var a = ' years left until retirement'; 
	return function(yearOfBirth) {
		var age = 2020 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990); //35 years left until retirement
retirementIceland(1990); //37 years left until retirement
retirementUS(1990); //36 years left until retirement

//all possible because of closures

// Lecture: Functions returning functions
```


Cleaning up code knowing about closures.

```
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
```

In the example above, job is used within the `interviewQuestion` execution stack to determine the right function to return.  Now knowing about closures, we can return one `anonymous` function and leverage the scope chain to identify the right `console.log` statement to execute given the job variable input of the outer variable. 

Again, even though `interviewQuestion` is returned, and the execution stack is gone, the scope chain is still in effect and its variable objects are accessible in memory since the `anonymous` function is nested within the `interviewQuestion` function. 

```
function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer') {
			console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
        	console.log('What subject do you teach, ' + name + '?');
        } else {
        	console.log('Hello ' + name + ', what do you do?');
        }
	}
}
```


## Using Bing, call and apply methods
### Call method 
```
var john = {
	name: 'John',
	age: 26, 
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + 
			', ladies and gentlemen! I\'m ' + this.name + 
			', I\'m a ' + this.job + ' and I\'m ' + this.age + 
			' years old.' );
		} else if (style === 'friendly') {
			console.log(' Hey! What\'s up? I\'m ' + this.name + 
			', I\'m a ' + this.job + ' and I\'m ' + this.age + 
			' years old. Have a nice ' + timeOfDay + '.');
		}
	}
}
```

`john.presentation('formal', 'Morning');`

```
var emily = {
	name: 'Emily',
	age: 35, 
	job: 'designer'
};
```

`john.presentation.call(emily, 'friendly', 'afternoon');`

When using the `call` method, the first argument is `this`, you can see here, that you can replace `this`, with another object,  so whenever we see, `this.something`in the presentation method found in the John object, it’s replaced with the argument, in this case it is `emily`. So instead `emily` is plugged in for `this`. 

This is called **method borrowing**. We wanted to use Johns method on emily.

### Apply Method

`// john.presentation.apply(emily, ['friendly', 'afternoon']);`

This wont work, but it does something similar to the `call `method, 
but can input an **array** as the argument. The presentation method requires two arguments, `style` and `timeOfDay` and therefore this won't work.

### Currying & Bind Method
There is this technique called currying, which allows the creation of 
functions with preset arguments and the bind method is great for this.

`var johnFriendly = john.presentation.bind(john, 'friendly')`

`johnFriendly('morning')//  Hey! What's up? I'm John, I'm a teacher and I'm 26 years old. Have a nice morning.`

Here we can see that, we have create a variable that consists of friendly
statements for `john`, however left the `timeOfDay` as argument.

We can do something similar for Emily. 

`var emilyFormal = john.presentation.bind(emily, 'formal');`

`emilyFormal('evening'); //Good evening, ladies and gentlemen! I'm Emily, I'm a designer and I'm 35 years old.`


### Using bind example

`var years = [1990, 1965, 1937, 2005, 1998];`

Recap, `arrayCalc`  is essentially a for loop function that takes in two arguments, an array and a function. Each element in the array is used as an argument into the function argument. 
```
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
```

We have two functions as potential inputs.
```
function calculateAge(el) {
    return 2016 - el;
}
function isFullAge(el) {
    return el >= 20;
}
```

Since full agedrinking age is different in different countries, 
we can make this more versatile. 
```
function isFullAge(limit, el) {
    return el >= limit;
}
```

First let’s store the ages using the first function. 

`var ages = arrayCalc(years, calculateAge);`
`var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));`

We can use bind here, `this` represents the element in the for loop.
`this` =  `arr[i]` 

`console.log(ages); //[26, 51, 79, 11, 18]`
`console.log(fullJapan); //[true, true, true, false, false]`

The alternative, is creating a age specific function for each country 

```
function isFullAgeJapan(el) {
    return el >= 20; 
}

function isFullAgeCanada(el) {
    return el >= 19; 
}
```





















