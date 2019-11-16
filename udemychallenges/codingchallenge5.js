// The bills were $124, $48, $268, $180 and $42.

// John likes to tip 20% of the bill when the bill is less than $50,
//  15% when the bill is between $50 and $200, 
//  and 10% if the bill is more than $200.

// Implement a tip calculator using objects and loops:
// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 
// 1) a new array containing all tips, and 
// 2) an array containing final paid amounts (bill + tip). 
// HINT: Start with two empty arrays [] as properties and then fill them 
// up in the loop.

// 1. Create an object with an array for the bill values
var johnBillObject = {
	name: 'John'
};
johnBillObject.billsArr = [124, 48, 268, 180, 42];
johnBillObject.calcTip = function() {
	this.allTips = [];
	this.totals = [];
	for (i = 0; i < this.billsArr.length; i++) {
		bill = this.billsArr[i]
		if (bill < 50) {
			tip = bill * 0.2
			this.allTips.push(tip); 
			this.totals.push(bill + tip);
		} else if ((bill >= 50) && (bill < 200)) {
			tip = bill * 0.15
			this.allTips.push(tip); 
			this.totals.push(bill + tip);
		} else {
			tip = bill * 0.1
			this.allTips.push(tip);
			this.totals.push(bill + tip);
		}
	} return 
		this.allTips;
		this.totals;
	

};

johnBillObject.calcTip()


// EXTRA AFTER FINISHING: Mark's family also went on a holiday, 
// going to 4 different restaurants. 
// The bills were $77, $375, $110, and $45.
// Mark likes to tip 20% of the bill when the bill is less 
// than $100, 10% when the bill is between $100 and $300, and 
// 25% if the bill is more than $300 (different than John).
// 5. Implement the same functionality as before, this time using 
// Mark's tipping rules
// 6. Create a function (not a method) to 
// calculate the average of a given array of tips. 
// HINT: Loop over the array, and in each iteration store 
// the current sum in a variable (starting from 0). 
// After you have the sum of the array, divide it by the 
// number of elements in it (that's how you calculate the average)
// 7. Calculate the average tip for each family
// 8. Log to the console which family paid the highest 
// tips on average


var markBillObject = {
	name: 'Mark'
};
markBillObject.billsArr = [77, 475, 110, 45];
markBillObject.calcTip = function() {
	this.allTips = []
	this.totals = []
	for (i = 0; i < this.billsArr.length; i++) {
		bill = this.billsArr[i]
		if (bill < 100) {
			tip = bill * 0.2
			this.allTips.push(tip); 
			this.totals.push(bill + tip);
		} else if ((bill >= 100) && (bill < 300)) {
			tip = bill * 0.1
			this.allTips.push(tip); 
			this.totals.push(bill + tip);
		} else {
			tip = bill * 0.25
			this.allTips.push(tip);
			this.totals.push(bill + tip);
		}
	} return 
		this.allTips;
		this.totals;
};

markBillObject.calcTip()



function avTipCalc(tipArr) {
	tipTotal = 0;
	numOfDinners = 0;
	for (i = 0; i < tipArr.length; i++) {
		tipTotal = tipTotal + tipArr[i];
		numOfDinners++;
	};
	average = tipTotal/numOfDinners;
	return average;
}

if (avTipCalc(johnBillObject.allTips) 
	> avTipCalc(markBillObject.allTips)) {
	console.log ('John has a higher tip average!');
} else if (avTipCalc(johnBillObject.allTips) 
	< avTipCalc(markBillObject.allTips)) {
	console.log('Mark has a higher tip average!');
} else {
	console.log('Equal Tipping Averages!');
}













































