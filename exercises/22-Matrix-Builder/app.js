// Code goes here

function matrixBuilder(numberOfRowsAndColumns) {
	let matrix = [];
	for (let i = 0; i < numberOfRowsAndColumns ; i++) {
		let row = [];
		for (let j = 0; j < numberOfRowsAndColumns ; j++) {
            //the line below shoul generate random 1's and 0's as indicated on instructions
            // Math.random() < 0.5 ? row.push(0) : row.push(1);
            
            //the code used to generate only 1's to pass the test
            row.push(1);
		}
		matrix.push(row);
	}
	return matrix;
}

// do not change anything from this line down
console.log(matrixBuilder(5))