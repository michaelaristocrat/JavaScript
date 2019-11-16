mikeAv = (89 + 120 + 103)/3
johnAv = (116 + 94 + 123)/3


if (mikeAv > johnAv) {
	console.log('Mike\'s team is the winner!');
} else if (johnAv > mikeAv) {
	console.log('John\'s team is the winner!');
} else {
	console.log('They\'re both equal!')
}

maryAv = (97 + 134 + 105)/3

if ((mikeAv > johnAv) && (mikeAv > maryAv)) {
	console.log('Mike\'s team is the winner!');
} else if (johnAv > mikeAv && johnAv > maryAv) {
	console.log('John\'s team is the winner!');
} else if ((maryAv > mikeAv)&& (maryAv > johnAv)) {
	console.log('Mary\'s team is the winner!')
} else if ((maryAv === mikeAv) || (maryAv === johnAv) || (johnAv == mikeAv)) {
	console.log('A team is tied with one another, no obvious winner')
}



//first 
//John's team is the winner!
//Mary's team is the winner!