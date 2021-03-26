let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {l: 2};

// your code here

for (let letter of par) {
    if (counts.indexOf(letter.toLowerCase())) {
        console.log("h");
    }
}

console.log(counts);