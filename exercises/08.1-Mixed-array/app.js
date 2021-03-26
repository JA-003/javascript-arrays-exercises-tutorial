var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let arrWithTypes = [];

for (let element in mix) {
    arrWithTypes.push(typeof(mix[element]));
}

console.log(arrWithTypes);