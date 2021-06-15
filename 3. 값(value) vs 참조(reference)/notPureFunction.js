function changeAgeImpure(person) {
  person.age = 25;
  return person;
}

var alex = {
  name: 'Alex',
  age: 30,
};

var changedAlex = changeAgeImpure(alex);

console.log(alex); // -> {name: 'Alex', age: 25}
console.log(changedAlex); // -> {name: 'Alex', age: 25}
