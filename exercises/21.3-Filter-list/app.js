let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here

function filterByName(arrayOfNames, string) {

    let stringLowerCased = string.toLowerCase();
    
	let filteredArrayOfNames = arrayOfNames.filter(function(name) {
		return name.includes(stringLowerCased);
	});

	return filteredArrayOfNames;
}


console.log(filterByName(names, 'am'));