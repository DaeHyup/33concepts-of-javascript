function changeAgePure(person) {
  var newPerson = JSON.parse(JSON.stringify(person));
  newPersonObj.age = 25;
  return newPersonObj;
}

var alex = {
  name: 'Alex',
  age: 30,
};

var alexChanged = changeAgePure(alex);

console.log(alex); // -> {name: 'Alex', age: 30}
console.log(alexChanged); // -> {name: 'Alex', age: 25}
