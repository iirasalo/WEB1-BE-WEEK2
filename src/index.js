const obj = {
  name: 'John',
  age: 30,
  city: 'New York',
};
console.log(obj);

const myJSON = JSON.stringify(obj);
console.log(myJSON);
//{ name: 'John', age: 30, city: 'New York' }
//{"name":"John","age":30,"city":"New York"}

const obj2 = JSON.parse(myJSON);
console.log(obj2);
