# Javascript - Basics
Inline: 
```  <script type="text/javascript">
    	console.log('Hello World')
    </script>
```
External:
`<script type="text/javascript" src="script.js"></script>`


## What is Javascript?

“Lightweight, cross-platform, object-oriented computer programming language”

Lightweight: doesn’t eat up much memory, relatively simple syntax

Cross-platform: can be used on multiple platforms and systems (not just for web systems)

OOL: Language based on objects 

Today, Javascript can be used in different places
* Client side: Javascript was traditionally only used in the browser 
* Server-side: Thanks for node.js, we can use Javascript on the server as well

Javascript is one of the three core technologies of web development
* Works well with HTML and CSS
* HTML is good for content 
* CSS is presentation
* JS is the programming aspect


## Variables and DataTypes
Different data types
Primitive: non-object data types
1. Number: Floating point numbers (always have decimals even if you don’t see them ie. 5 = 5.0)
2. String: Sequences of characters (used for text)
3. Boolean: Logical data type - can be either true or false
4. Undefined: Automatically assigned to a variable that doesn’t have a value yet.
5. Null: non-existant 

Javascript has dynamic typing, meaning we don’t have to define the type of the value, it automatically can determine it. 

Its best practice to always give the variables meaningful names (not x but rather firstName or lastName)

firstName represents camelcase notation. Makes things easier to read. Its a best practice. 

You can declare a variable without a value. However it will be undefined. 
```
var job;
console.log(job)

job = 'Teacher';
console.log(job)
```
You don’t need to use `var` to assign a value to it later. 

Rules for naming variables:
* Can’t start with numbers or symbols in the name (except $ and _)
* Can’t use reserved JS key words ie. function , delete

## Variable Mutation and Type Coercion
`//` used for single lines commenting
`/*` …..multiline commenting  `*/`

### Type Coercion 

```
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age)
```

Prints `John 28`

Javascript confers types as they’re needed. Here, 28 was converted to a string.  This is called type coercion.

Note: 
You can declare multiple variables and define them later.  This is common practice. 
```
var job, isMarried; 

job = 'teacher';
isMarried = false;
```

## Variable Mutation
You can reassign values to variables you’ve defined earlier. 
```
var firstName = 'John';
var age = 28;

age = 'twenty eight'
```


Note: 
`console.log(something)` prints the something into the console.

`alert(something)` brings up an “alert” window and presents the something. The user is required to click OK before seeing the html. 

`prompt(something)` brings up an alert type window that can have a text input area. The response could be stored in a variable. 

Ex. `var broughtYouQuestion = prompt('What brought you here?')`


## Basic Operators
### Math Operants
`+`  `-` `*`  `/`

### Logical Operators 
These require two “operands”. 
`var johnOlder = ageJohn < ageMark;`

### Typeof operator
`console.log(typeof johnOlder);`

Basically outputs the datatype of the operand.

## Operator Precedence

How does JS know which operators to execute first?
```
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);
```
 
This works because javascript has a precedence table, where they rank different operators based on execution. 

Details: [Operator precedence - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

Can you assign the same value to two variables at the same time?

Yes. 
```
var x, y;
x = y = (3 + 5) * 4 - 6; // both equal to 26
```

This works because, unlike most operators like `+` that conduct the operation from left-to-right, the assignment operator `=` works right to left. 

```
y = (3 + 5) * 4 - 6; // first 
x = y //second 
```

You can also console.log two variables at the same time. 

`console.log(x, y); // 26,26`


### More operators 
```
x = x * 2 //same as below 
x *= 2;
```

You can use the second statement with other math operators.  These are called assignment operators. 

```
x = x + 1
x += 1 
x ++
```

### Escaping 

When using `‘` in a string, you will need to add a `\` to indicate that you are NOT ending the string but rather that it is part of the string. 

Ie. 
`console.log('is Mark\'s BMI higher than John\'s?' + ' ' + markHigherBmiTest)`

## If else statements 
If else statements require a boolean as the condition. Therefor if you had a variable with that is already a boolean, then you wouldn’t need to add the `===`. 

The first area after the curly brace is called the if block.  The second one, after the else, is called the else block. 

ex. 
```
var name = 'Michael';
var girlFriend = 'Taylr'

if (girlFriend === 'Taylor') {
	alert('Michael\'s GF is ' + girlFriend)
} else {
	alert("What happened? :(")
}
```


## Boolean logic
AND `&&` = true if ALL are true (All conditions must be true for the end boolean to be true)

OR `||` true if ONE is true  (Its enough of one of the conditions to be true for the end boolean to be true)

NOT `!` inverts true/false values (If variable A is true, the the end boolean of NOT A is false…basically its the opposite of the variable)

ex. 
```
var firstName = 'Michael';
var age = 25; 
if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager.');
} else {
	console.log(firstName + ' is an adult.');
}

// Michael is an adult
```

Note: You can have multiple `else if` statements in this construct. 

## Switch Statement
Kind of like an if else statements.  Sometimes can look cleaner if you have a long if else statement.  Can have multiple conditions (case clauses) for the same results. 

```
var variableHere = 'Something';
switch (variableHere) {
	case 'condition1':
		console.log('variableHere === condition1');
		break;// means stop here
	case 'condition2':
	case 'condition3':
		console.log('variableHere === condition2 || condition3');
		break;// means stop here
	default:// if no cases matched then do this
		console.log('none of the cases matched')
}
```

NOTE: You can remove the break after each condition by adding a `return` in front of the executable statements. 

## Truthy and Falsy values 
“Falsy value that is considered false when evaluated in an if else statement” 

Falsy values: undefined, null, 0, ‘ ‘, NaN

These values are not exactly false, but will be determined as false when evaluated in a if else statement. 

Truthy values: Any value that is not a false value (undefined, null, 0, ‘ ‘, NaN).

ex. 
```
var something; 

if (something) {
	console.log('Variable is defined');
} else {
	console.log('Variable is NOT defined');
}

// Variable is NOT defined
```


What if the JS variable IS defined, but defined by zero?

It is common practice to use `(something || something === 0)` in an if else statement to check if the variable has been defined! See below. 

```

var something;

something = 0; 

if (something || something === 0) {
	console.log('Variable is defined');
} else {
	console.log('Variable is NOT defined');
}

// Variable is defined
```


## What does the == equality operator do?
Basically, it works similarly to `===` but can “work” across different data types. See below. 

```
var something;

something = 1;

if (something == '1') {
	console.log('The == operator does type coercion!');
} 

//The == operator does type coercion!
```

Javascript in this case coverts the string to a number and then compares the numbers. 

`==` is a loose equality operator where as `===` is a strict equality operator. 

It is best practice to use `===` to avoid any unexpected bugs. 

## What are functions? 
If you have a piece of code you want to run over and over again, you can put it into a function. 

Functions are like containers that hold code, you can pass ‘argument’ through them. 

```
function nameOfFunction(arguments){
	return (what you want to return) ie. arguments + 1;
}
```


To call the function:

```
var storeIt = nameOfFunction(appropriateArgument)
```

DRY principle: Don’t repeat yourself, never write the same code, always put it in a function if you do have to repeat yourself. 

Example:
```
function yearsB4Retire(birthYear) {
	var years = 65 - (2019 - birthYear);
	return console.log('You have ' + years + ' years until you can retire!' );
}

yearsB4Retire(1994)

// You have 40 years until you can retire!
```


## What are function statements and expressions?
You can use `function` to indicate that you’re writing a function OR you can use a function expression. 

### Function declaration 

```
Function whatDoYouDo(job, firstName) {
}
```

### Function Expression 
```
var whatDoYouDo = function(job, firstName) {
}
```

### What is the difference between function statements and function expressions?

JS expressions are pieces of code that always results in a value. 

Function declarations are statements. 
Function expressions are ones that produce a result. 

* NEED TO CLARIFY THIS? * Did I miss understand?It seems that both examples above are declarations and therefor statements since they do not produce an immediate result. 


## What are Arrays?
An array is a collection of elements or variables. 

`var names = ['Michael', 'David', 'Janet'];`
This is an array of names with the elements.  When you create a new array, its called “initializing the array”.


An alternative way of writing this (although less common):

`var names = new Array ('Michael', 'David', 'Janet');`


Arrays are **zero based** , meaning that the first element is in location 0. 

```
var names = ['Michael', 'David', 'Janet'];
console.log(names[0]); // Michael
console.log(names.length); //3
```

We use this syntax ie. `name[0]` to retrieve and mutate in array. 

 Use `variable.length` to add one more element to the end of an array.
```
var names = ['Michael', 'David', 'Janet'];
names[1] = 'Changed';
names[names.length] = 'Mary'; //"Michael", "Changed", "Janet", "Mary"
```

You can also use the method `push` to add an element to the end of an array. 

```
var names = ['Michael', 'David', 'Janet'];
names.push('Taylor'); // "Michael", "David", "Janet", "Taylor"
```

## What are some useful array methods?
```
names.push('Taylor'); // adds new last element
names.unshift('The Rock'); // adds new first element
names.pop(); // removes last element
names.shift(); // removes first element 

names.indexOf('David')); // returns the position of the argument
```

`.indexOf()` is most commonly used to identify if an element if an an array or not. It will return a `-1` if the element is NOT present. 

ex. 

```
var names = ['Michael', 'David', 'Janet'];
var isTaylor = names.indexOf('Taylor') === -1 ? 
'Taylor is NOT in the name array' : 'Taylor IS in the name array';

console.log(isTaylor); // Taylor is NOT in the name array
```


## Objects and Properties
Objects = single most important features of javascript 

In arrays, order matters. With objects, order does not matter. 

Objects are like Arrays but you can assign “names” to the elements.  If you want to access specific elements, you can identify them with the name. So in objects, we define key-value pairs which means each value has a name which is called the key. 

With arrays we use square brackets `[ ] `

With Objects, we use curly braces ` { } `

You define an object with what’s called an object literal . An object literal is essential the curly braces. 

`var michael = {}`

```
var michael = {
	firstName: 'Michael', // firstName is a property of the michael object
	lastName: 'Aristocrat',
	birthYear: 1994, 
	family: ['Michelle', 'Victoria', 'Gloria', 'Olga'],
	job: 'Product Manager',
	isMarried: false // last one doesn't have a comma
};

//to retrieve data from an object, you use a . then the property name
console.log(michael.job); // Product Manager

//you can also use square brackets, needs to be a string 
console.log(michael['job']); // Product Manager

// Mutating the data 
michael.job = 'Programmer';
console.log(michael['job']); // Programmer


// You can initialize the Object like you do with Arrays
 var taylor = new Object();
 taylor.firstName = 'Taylor';
 taylor.birthYear = '1998';
 taylor['lastName'] = 'Ashworth';
 console.log(taylor)
```


## Methods
```
var michael = {
	firstName: 'Michael', 
	lastName: 'Aristocrat',
	birthYear: 1994, 
	family: ['Michelle', 'Victoria', 'Gloria', 'Olga'],
	job: 'Product Manager',
	year: 2019,
	isMarried: false, 
	calcAge: function(){ //this is a function expression
		this.age = this.year - this.birthYear; // 'this' simply refers to the current object 
	}
};
/*the nameless function is 
executed when the property calcAge is accessed*/

michael.calcAge(); /*calling the function in the property like this,
					without executing the function, the age prop
					will not appear */
```


Example: 
Coding challenge 4. 

```
/* 1. Create objects for for mark and john inc. 
name, mass, height.

2. Add a method to each object to calculate the BMI, 
save the BMI to the object and also return it from the
methode 

3. Log to the concole who has the highest BMI together
with the full name and the respective BMI/
Dont forget that they might have the same BMI 
*/
// bmi = mass / (height * height)
var mark = {
	fullName: 'Mark Mark',
	mass: 100, 
	height: 1.7, 
	bmiCalc: function() {
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}

}

var john = {
	fullName: 'John John',
	mass: 200, 
	height: 2,
	bmiCalc: function() {
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}

}

if (mark.bmiCalc() > john.bmiCalc()) { // calculate and read the BMI at the same time
	console.log(mark.fullName + ' has the higher BMI with a BMI. \n' 
		+ john.fullName + ' : ' + john.BMI + '\n' + mark.fullName 
		+ ' : ' + mark.BMI);
} else if (john.BMI> mark.BMI { /* don't need to call the methode 
								bcause the bmi is already calculated */
	console.log(john.fullName + ' has the higher BMI. \n' 
	+ john.fullName + ' : ' + john.BMI + '\n' + mark.fullName 
	+ ' : ' + mark.BMI);
} else {
	console.log('They have equal BMI\'s');
}
```


## Loops and iterations 
One of the “**control structures**”.

Imagine you have a very repetitive task, in this case, you will use a loop.

### For Loop

A for loops consists of three parts:
`for` `(three statements serated by ;)`  `{  }`

The three statements:
1. The initial value of a counter ie. ` i = 0;`
2. The condition that is evaluated before each loop iteration ie. ` i < 11;`
(Note: Only if this condition is true, then the next loop will run)
3. Counter update after each iteration ie. `i++`

Note: `i` is a standard counter variable

Suppose you want to print something to the console 10 times. For example: `console.log(1)` all the way to `console.log(10)`.

You can either type out the statements 10 times or use a for loop.

The for loop would like like so: 

```
for (var i = 0; i < 11; i ++ 1) {
	console.log(i);
}
```

Why does this work?

Well we start:
1. `i` is `0`, which is less than 11 and therefor the loop will run `console.log(0)`  and the counter is updated to 1
2. `i` is  `1`, which is less than 11 therefor the loop will run `console.log(1)` 
….

This continues until `i` is `11` , which is NOT less than 11 and therefore the loop will NOT run,  the program can exit the loop now. 

Practical example. 

Let’s say I had an array of my sisters names, and I wanted to create a new new array with their full names. I could do it like so:

```

var siblingsFirstNames = ['Gloria', 'Victoria', 'Michelle'];

//Create new array with full names

var siblingsFirstLastNames = [];
var lastName = 'Aristocrat';

for (var i = 0; i < siblingsFirstNames.length; i++) {
	siblingsFirstLastNames.push(siblingsFirstNames[i] +  ' ' + lastName);
}
// "Gloria Aristocrat", "Victoria Aristocrat", "Michelle Aristocrat"
```

Taking this example a little further with an if else statement.

```

var siblingsFirstNames = ['Gloria', 'Victoria', 'Michelle'];
var lastName = 'Aristocrat';
var siblingsFullNames =[]

for (var i = 0; i < siblingsFirstNames.length; i++) {
	if (siblingsFirstNames[i] === 'Gloria') {
		siblingsFullNames.push(siblingsFirstNames[i] + ' ' + lastName);
	} else if (siblingsFirstNames[i] === 'Victoria') {
		siblingsFullNames.push(siblingsFirstNames[i] + ' Elizabeth ' + lastName);
	} else {
		siblingsFullNames.push(siblingsFirstNames[i] + ' Olga ' + lastName);
	}
}

//["Gloria Aristocrat", "Victoria Elizabeth Aristocrat", "Michelle Olga Aristocrat"]
```

How do you loop through a list backwards ?

```

var siblingsFirstNames = ['Gloria', 'Victoria', 'Michelle'];
var siblingsFirstLastNames = [];
var lastName = 'Aristocrat';

for (var i = siblingsFirstNames.length - 1; i >= 0; i--) {
	siblingsFirstLastNames.push(siblingsFirstNames[i] +  ' ' + lastName);
}

// ["Michelle Aristocrat", "Victoria Aristocrat", "Gloria Aristocrat"]

```

### What is a while loop in javascript?

The difference between a for loop and a while loop is, instead of the three statements needed for a for loop….

For loop needs:
1. The initial value of a counter ie. ` i = 0;`
2. The condition that is evaluated before each loop iteration ie. ` i < 11;`
(Note: Only if this condition is true, then the next loop will run)
3. Counter update after each iteration ie. `i++`

… a while loop only needs a conditional statement.

Let’s say I had an array of my sisters names, and I wanted to create a new new array with their full names. I could do it like so with a while loop:

```
var siblingsFirstNames = ['Gloria', 'Victoria', 'Michelle'];
var siblingsFirstLastNames = [];
var lastName = 'Aristocrat';
var i = 0;
while (i < siblingsFirstNames.length) {
	siblingsFirstLastNames.push(siblingsFirstNames[i] +  ' ' + lastName);
	i++;
};
//["Gloria Aristocrat", "Victoria Aristocrat", "Michelle Aristocrat"]
```

Here, the results are the same. 

Differences: 
* The initial counter is NOT in the while loop control structure like it is in the for loop.
* The counter update is within the while loop code block, rather than the instructions. 

## What are continue and break statements in Javascript?
I have an array of first names of everyone in my family

```
var familyFirstNames = ['Olga', 'Eckard', 'Gloria', 'Victoria', 'Michelle', 'James'];
```

I want create an array consisting of the first and last names of my sisters Gloria, Victoria and Michelle. 

```
var lastName = 'Aristocrat';
var sistersFullNames =[];
```

You could do it like so: 

```
var familyFirstNames = ['Olga', 'Eckard', 'Gloria', 'Victoria', 'Michelle', 'James'];
var lastName = 'Aristocrat';
var sistersFullNames =[];

for (var i = 0; i < familyFirstNames.length; i++) {
	if ((familyFirstNames[i] !== 'Gloria')
	 & (familyFirstNames[i] !=='Victoria') 
	 & (familyFirstNames[i] !=='Michelle')) {
		continue};
	sistersFullNames.push(familyFirstNames[i] +  ' ' + lastName);
}
//["Gloria Aristocrat", "Victoria Aristocrat", "Michelle Aristocrat"]
```


You can read it like so, for each element in `familyFirstNames`, if the element is different from the three names  `Gloria` , `Victoria` and `Michelle`, then **continue** through to the next element in the array. 

For example, `Olga` meets the condition NOT `Gloria` & `Victoria` & `Michelle` and therefore the statement `continue` can execute.  Which means, go to the next element in this case. 

For example, `Gloria` DOES NOT meets the condition NOT `Gloria` & `Victoria` & `Michelle` and therefore the statement `continue` can WILL NOT execute (we can’t continue because the condition is not met).  Therefor the statement `sistersFullNames.push(familyFirstNames[i] +  ' ' + lastName);` will run. 

### What are breaks in for loops (Javascript)?
Break works similarly except, it STOPs the loop rather than skips to the next element. 

Suppose I have list of names and ages, I know that the first half of the list consists of the names and the ages are in the second half.  I’m not exactly sure at which position the age’s start. 

I could use the for loop control structure with a break to get a list of names. 
```
var namesAndAges = ['Gloria', 'Victoria', 'Michelle', 22, 20, 18];
var names = [];

for (var i = 0; i < namesAndAges.length; i++) {
	if (typeof namesAndAges[i] === 'number') {
		break};
	names.push(namesAndAges[i]);
}

//["Gloria", "Victoria", "Michelle"]
```

Read the for loop like so: For each element in the array, starting with the first, if the type of the element is a `number` then stop, otherwise execute the argument ` names.push(namesAndAges[i]);`. In this case, each element is being added to the array names using the push method.   











 
















