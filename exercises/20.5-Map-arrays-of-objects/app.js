let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
	let today = new Date();

	let todayYear = today.getFullYear();
	let todayMonth = today.getMonth();
	let todayDate = today.getDate();

	let birthDay = person.birthDate;

	let birthDayYear = birthDay.getFullYear();
	let birthDayMonth = birthDay.getMonth();
	let birthDayDate = birthDay.getDate();

	let age = todayYear - birthDayYear;
	
	if (birthDayMonth > todayMonth) age--;
	else {
		if (birthDayMonth == todayMonth) {
			if (birthDayDate > todayDate) age--;
		}
	}

	return `Hello, my name is ${person.name} and I am ${age} years old`;
};

console.log(people.map(simplifier));