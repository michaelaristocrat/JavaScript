// Create the tip calulator
// Create array with the tips 
// Create an array with totals

function tipCalculator(amount) {
	var tip;
	if (amount < 50) {
		tip = amount * 0.2;
	} else if (amount >= 50 && amount <= 200) {
		tip = amount * 0.15;
	} else {
		tip = amount * 0.1;
	}

	return tip;
}

var bills = [124, 48, 268]; // $
var tips = [tipCalculator(bills[0]), 
		tipCalculator(bills[1]), 
		tipCalculator(bills[2])];
var totals = [(bills[0] + tips[0]), 
		(bills[1] + tips[1]),  // don't need to brackets around each element in the array
		(bills[2] + tips[2])];

console.log(tips);
console.log(totals);
