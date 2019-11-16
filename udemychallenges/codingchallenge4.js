

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
		+ ' : ' + mark.BMI)
} else if (john.BMI> mark.BMI { /* don't need to call the methode 
								bcause the bmi is already calculated */
	console.log(john.fullName + ' has the higher BMI. \n' 
	+ john.fullName + ' : ' + john.BMI + '\n' + mark.fullName 
	+ ' : ' + mark.BMI)
} else {
	console.log('They have equal BMI\'s')
}