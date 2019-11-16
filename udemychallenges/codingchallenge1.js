// bmi = mass / (height * height)

var markMass, markHeight, johnMass, johnHeight
markMass = 100
markHeight = 1.7
johnMass = 200
johnHeight = 2

function bmi(mass, height) {
	bmiz = mass / (height * height)
	return bmiz
}

markBmi = bmi(markMass, markHeight) //34.602076124567475
johnBmi = bmi(johnMass, johnHeight) //50 

markHigherBmiTest = markBmi > johnBmi
console.log(markBmi)
console.log(johnBmi)
console.log('is Mark\'s BMI higher than John\'s?' + ' ' + markHigherBmiTest)