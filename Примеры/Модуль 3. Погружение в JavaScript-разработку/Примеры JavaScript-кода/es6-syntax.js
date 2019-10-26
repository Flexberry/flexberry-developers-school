// 1. Ключевые слова let и const
let personName = 'Alex';
const age = 27;

// 2. Шаблонные строки (String Templates)
const personInfo = `Name: ${personName}, age is ${age}`;
console.log('personInfo:', personInfo); // "Name: Alex, age is 27"

// 3. Стрелочные функции (Arrow Functions)
// return с одним параметром функции
const getNextNumber = number => number + 1;
console.log('getNextNumber:', getNextNumber(10)); // 11

//return с несколькими параметрами функции
const getSum = (a, b) => a + b;
console.log('getSum:', getSum(2, 3)); // 5

//return у функции без параметров
const getPersonInfo = () => `Name: ${personName}, age is ${age}`;
console.log('getPersonInfo:', getPersonInfo()); // "Name: Alex, age is 27"

//return объекта
const getPersonObject = () => ({
  name: personName,
  age: age,
});
console.log('getPersonObject:', getPersonObject()); // {name: "Alex", age: 27}

// функция, тело которой имеет несколько операторов
const div = (a, b) => {
  console.assert(b !== 0, 'Dividing by zero');
  return a / b;
};
console.log('div:', div(10, 5)); // 2
console.log('div:', div(10, 0)); // Assertion failed: Dividing by zero, Infinity

// 4. Оператор расширения и оставшиеся параметры (Spread and Rest Operators)
// Spread Operator
const hobbies = ['Music', 'Sport'];
const anotherHobbies = [...hobbies, 'Cooking'];
console.log('anotherHobbies:', anotherHobbies); // ["Music", "Sport", "Cooking"]

const person = {
  name: 'Alex',
  age: 27,
};
const anotherPerson = {
  ...person,
  hasHobbies: true,
};
console.log('anotherPerson:', anotherPerson); // {name: "Alex", age: 27, hasHobbies: true}

//Rest Operator
// Ограничение на явно заданное количество параметров
function logArgs(arg1, arg2, arg3) {
  console.log('logArgs:', arg1, arg2, arg3); // 1 2 3
}
logArgs(1, 2, 3);

// Использование Spread Operator для вызова функции
const args = [1, 2, 3];
logArgs(...args); // аналог logArgs.apply(this, args);

// Все параметры "собираются" в один массив
function logArgsArray(...args) {
  console.log('logArgsArray:', args);
}
logArgsArray(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// 5. Деструктуризация (Destructuring assignment)
//Деструктуризация объектов
const { name, hasHobbies } = anotherPerson; // Имена переменных должны совпадать с именами свойств объекта
console.log('name:', name); // "Alex"
console.log('hasHobbies:', hasHobbies); // true

const { age: personAge } = person; // Можно дать произвольное имя новой переменной
console.log('personAge:', personAge); // 27

// Деструктуризация массивов
const [hobby1, hobby2] = hobbies; // Имена переменных могут быть произвольными
console.log('hobbies after destructuring:', hobby1, hobby2); // "Music" "Sport"

// Деструктуризация на уровне параметров функции
function logPersonInfo({ name, age }) {
  console.log(`Name: ${name}, age is ${age}`);
}
logPersonInfo(person);

// 6. Классы (ES6 Classes)
// Объявление класса (Class Declaration)
class Cat {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  static getType() {
    return 'Cat';
  }

  speak() {
    console.log(this.name + ' make a sound');
  }

  get age() {
    return this._age;
  }
}

// Выражение класса (Class Expression)
let Lion = class Lion extends Cat {
  static getType() {
    return 'Lion';
  }

  speak() {
    super.speak();
    console.log(this.name + ' roars');
  }
};

const cat = new Cat('Barsik', 3);
console.log('age:', cat.age); // 3
cat.speak(); // "Barsik make a sound"
cat.age = 4; // Ничего не произойдет, т.к. у свойства нет сеттера!
console.log('age after changing:', cat.age); // 3
console.log('cat type:', Cat.getType()); // "Cat"

const lion = new Lion('King', 7);
lion.speak(); // "King make a sound", "King roars"
console.log('lion type:', Lion.getType()); // "Lion"
