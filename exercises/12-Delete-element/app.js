var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let filteredPeopleList = people.filter(name => name != personName);
    
    return filteredPeopleList;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));