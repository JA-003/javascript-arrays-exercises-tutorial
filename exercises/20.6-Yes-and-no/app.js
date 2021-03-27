let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let theBoolsWorkingArray = theBools;

theBoolsWorkingArray = theBoolsWorkingArray.map((value) => {
    if (value == 1) {
		return 'wiki';
	}
	else if (value == 0) {
		return 'woko';
	}
	else {
		return value;
	}
});

console.log(theBoolsWorkingArray);