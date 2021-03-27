function lyricsGenerator(array) {
	let counter = 0;
	let lyricsNewArray = [];
	for (let digit of array) {
		if (digit == 0) {
			counter = 0;
			lyricsNewArray.push('Boom');
		} else if (digit == 1) {
			counter += 1;
			lyricsNewArray.push('Drop the base');
			counter == 3 && lyricsNewArray.push('!!!Break the base!!!');
		}
	}
	return lyricsNewArray.join(' ');
}

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))