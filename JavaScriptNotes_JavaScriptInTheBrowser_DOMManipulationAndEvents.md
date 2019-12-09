# JavaScript in the Browser: DOM Manipulation and Events
JS interacting with the browser = DOM manipulation 

DOM: Document Object Model; 
* Structured représentation of an HTML document; 
* The DOM is used to connect webpages to scripts like JavaScript;

For each HTML element, there is an object in the DOM.  The objects can be accessed and interacted with. 

We can use JavaScript methods to modify the DOM. The methods are attached to the `document` object. 

### First DOM access and manipulation 

How to create our fundamental game variables?

How do you generate a random number in Javescript?

There are some built in functions

`Math.random()`
`Math.floor()`
`Math.random() *6`
`Math.floor(Math.random() * 6) +1 `

`Math.ceil((Math.random() * 6)`


How do you manipulate the DOM?
The document object gives you access to the dom. 

`querySelector()` : lets you select stuff like it does in CSS.  Use`class` and `id` attributes to identify the HTML element you’re interested in. 

You can use this method to read and write. 

`textContent` is what you use too change the text that is found within the element. This can only send plane text. 

`innerHTML` allows you to choose the HTML elements you want to send. You need to write it in a string (because if you didn’t, the JS parser would think is JS and would throw an error). 

`style` method allows you to change the css of a of an element. 

How do you read from the DOM?

How do you change CSS styles?



Tips: 
Use arrays when you can. 
```
var score1 = 0;
var score2 = 0;
 // or 
var scores = [0, 0]; // cleaner
```


Declare variables when you have several of them. 
```
var scores = [0, 0]; 
var roundScore = 0;

// or 

var scores, roundScore; // cleaner

score = [0, 0];
roundScore = 0;
```



## What are events? 
### How can I make my page do something when someone clicks a button? 

They’re like notifications sent to the code that are triggered whenever something happens on the page ie. Button click, text input etc. 

You can use an **event listener**, which is a function,  that performs an action based on the event being triggered, ie. When someone clicks this button, show them a new meme. 

Events are organized in what’s called a **message queue** in the JavaScript engine. This is where the events that happen in the browser are waiting to be processed. 

These events can be processed when the execution stack is empty (ie. in the global execution context). 

So if there is a `click` event, then an eventListener (ie. `clickHandler()`) will be called and the function will sit on top of the global execution stack (meaning it will have its own execution context and be the active execution context). 


**How do you set up an event listener?** 
Let’s say we have the following element: 
`<button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>`

1. Select it in your JS code with `querySelector`. (Remember using the class name or ID to select specific element - CSS style).
2. Then `addEventListener`. This has two arguments 1: type of event 2: the function that will happen as soon as the event happens

Note: Events found here: [Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

**What is a callback function?**

Basically a function that calls another function. 

ex. 
```
function btn() {
	//do something here
}
/*typically call a function like so btn(); but not when you use an event listener.
This is because we want the event lister to call the function.
This is a call back function, a function that calls another function*/

document.querySelector('.btn-roll').addEventListener('click', btn);
```

**What is an anonymous function?**

This is simply a function that does not have a name. Since it doesn’t have a name, it cannot be re-used anywhere else. 

ex. 
```
document.querySelector('.btn-roll').addEventListener('click', function (){
	//Do something here.
});
```

Note: If you’re using the function only once, for a particular case, then it makes sense to use the anonymous function like in the example above. 

**What is another way to select elements by their ID?**

The first method is:`document.querySelector('.nameOfclass’)` or  `document.querySelector('#nameOfID’)` 

The second is :`document.getElementByID('nameOfID')` 

**How do you change the image in an img element?**

`document.querySelector('.dice’).scr = nameOfimage.png`

**How do you change the style of element?**

`document.querySelector('.dice’).style.display = 'none'`

**How do you change the HTML of an element?**

```
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>' 
```
 
## What is the `different` operator?
`!==`  
`!=` This one performs type coercion 
## What is the ternary operator?
```
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
```

Is the same thing as saying:

```
If (activePlayer === 0) {
	activePlayer =1;
} else {
	activePlayer = 0;
}
```

Typically, you would use the ternary operator for simple if else statements. 

## How do you add, remove and toggle HTML classes?
First you must understand the `HTML DOM classList Property`.

classList returns the class name(s) of an element as a DOMTokenList object.

`classList` has several methods…
1. `add()` : which takes in classes you want to add to the element as argument(s)
2. `remove()` which takes in classes you want to remove from the element as arguments(s)
3. `toggle()`: which takes in the class you want to remove if present or add if absent. 

```
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
```

In this example, one of the elements has active present, while the other didn’t (which you can’t see in the example). Each time a particular scenario occurs, these elements are triggered forcing them to switch. One becomes active where as the other becomes “inactive” ie has active removed from the classes. 


## What is the “DRY” principle?
Stands for don’t repeat yourself. 

Let’s imagine that you have the following code snippet written several times in your code

```
	if (score[activePlayer] <= 100) {
		document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
	} else {
		document.querySelector('#score-' + activePlayer).textContent = 'Winner!';
	}
```

Well at this point, your code will become quite long and tedious to read. Also, if you want to change something, then you will have to locate every location of this code and conduct the change several times. 

This is why the DRY principle exists. It is the best practice to wrap this code into a function so that if there is a change to be made, you can make it once. 

```
function winnerCheck() {
	if (score[activePlayer] <= 100) {
		document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
	} else {
		document.querySelector('#score-' + activePlayer).textContent = 'Winner!';
	}
};
```


## What is a state variable? How do I use a state variable? Why should I use a state variable?

A state variable tells us the condition of a system (definition).  We need a state variable when we need to remember the state of something. 

Example could be: If our game playing? Or is our game NOT playing? 
































