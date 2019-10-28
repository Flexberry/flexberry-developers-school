// 1. Примитивные типы
let personName = 'Alex';
let age = 27;
let isMale = true;
let noValue = null;
let someVariable = undefined;
let id = Symbol('id');

// 2. Ссылочные типы
const hobbies = ['Sports', 'Cooking'];

// Создание объекта через объектный литерал
const person = {
  name: 'Alex',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  personInfo() {
    console.log(
      'Name is ' +
        this.name +
        ', age is ' +
        this.age +
        ' and the user has hobbies: ' +
        (this.hobbies.length > 0)
    );
  },
};

person.personInfo();

// Создание объекта через Object.create()
const secondPerson = Object.create({});
secondPerson.name = 'Anna';
secondPerson.age = 30;
secondPerson.hobbies = ['Fitness', 'Cats'];

// Создание объекта через функцию-конструктор
function Person(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}
thirdPerson = new Person('Boris', 18, ['Skating']);

// 3. Значения примитивных типов копируются!
let secondName = personName;
personName = 'Max';
console.log(personName); // 'Max'
console.log(secondName); // 'Alex'

// 4. Ссылочные типы указывают на одно и то же значение!
let anotherPerson = person;
person.age = 28;
console.log(person.age); // 28
console.log(anotherPerson.age); //28

// 5. Константой является ссылка на сам объект или массив, а не на его поля/значения.
hobbies.push('Programming'); //Так можно
console.log('Hobbies after pushing to "const": ', hobbies); // ["Sports", "Cooking", "Programming"]
//hobbies = 43; // Ошибка. Так нельзя

// 6. Клонирование массивов
hobbies.push(['Extra hobby 1', 'Extra hobby 2']);
hobbiesClone = hobbies.slice(); // Глубокая копия не создается!
// hobbiesClone = [...hobbies]; // Альтернативный синтаксис ES6
hobbies[0] = 'Reading';
hobbies[3].push('Extra hobby 3');
console.log('Hobbies before clone: ', hobbies); // ["Reading", "Cooking", "Programming", ["Extra hobby 1", "Extra hobby 2", "Extra hobby 3"]]
console.log('Hobbies after shallow clone: ', hobbiesClone); // ["Sports", "Cooking", "Programming", ["Extra hobby 1", "Extra hobby 2", "Extra hobby 3"]]

// 7. Глубокое клонирование массивов
hobbiesAnotherClone = JSON.parse(JSON.stringify(hobbies)); // Использование преобразований в JSON
// hobbiesAnotherClone = _.cloneDeep(hobbies); // Использование Lodash
hobbies[0] = 'Poerty';
hobbies[3].push('Extra hobby 4');
console.log('Hobbies before clone: ', hobbies); // ["Poerty", "Cooking", "Programming", ["Extra hobby 1", "Extra hobby 2", "Extra hobby 3", "Extra hobby 4"]]
console.log('Hobbies after deep clone: ', hobbiesAnotherClone); // ["Sports", "Cooking", "Programming", ["Extra hobby 1", "Extra hobby 2", "Extra hobby 3"]]

// 8. Клонирование объектов
let secondPersonCopy = Object.assign({}, secondPerson); // Глубокая копия не создается!
// secondPersonCopy = { ...secondPerson }; // Альтернативный синтаксис ES6
secondPerson.name = 'Elena';
secondPerson.hobbies.push('Dancing');
console.log('Person before clone', secondPerson); // {name: "Elena", age: 30, hobbies: ["Fitness", "Cats", "Dancing"]}
console.log('Person after shallow clone: ', secondPersonCopy); // {name: "Anna", age: 30, hobbies: ["Sports", "Cooking", "Dancing"]}

// 9. Глубокое клонирование объектов
let thirdPersonCopy = $.extend(true, {}, thirdPerson); // Использование jQuery
// let thirdPersonCopy = _.cloneDeep(thirdPerson); // Использование Lodash
// thirdPersonCopy = { ...thirdPerson }; // Альтернативный синтаксис ES6
thirdPerson.name = 'Igor';
thirdPerson.hobbies.push('Fishing');
console.log('Person before clone', thirdPerson); // {name: "Igor", age: 18, hobbies: ["Skating", "Fishing"]}
console.log('Person after deep clone: ', thirdPersonCopy); // {name: "Boris", age: 18, hobbies: ["Skating"]}
