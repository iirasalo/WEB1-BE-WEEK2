const obj = { name: 'John', age: 30, city: 'New York' };

const stringy = JSON.stringify(obj);

console.log(stringy);

const parsed = JSON.parse(stringy);

console.log(parsed);

//////////////////////////////////

const iira = { name: {
                    first: 'Iira',
                    middle: 'Alina',
                    last: 'Salo',
                }, 
               age: 30, 
               city: 'Helsinki', 
               pets: 'Cats x2 - Örbä & Ärbä' };

const JSONiira = JSON.stringify(iira);

console.log(JSONiira);

const parsediira = JSON.parse(JSONiira);

console.log(parsediira.name.middle);