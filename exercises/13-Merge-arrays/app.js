var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here

    firstArray.forEach(element => newArray.push(element));
    secondArray.forEach(element => newArray.push(element));

    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));