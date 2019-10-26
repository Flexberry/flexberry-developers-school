// 1. Понимание контекста вызова
class NameField {
  constructor(name) {
    const field = document.createElement('li');
    field.textContent = name;
    const nameListHook = document.querySelector('#names');
    nameListHook.appendChild(field);
  }
}

class NameGenerator {
  constructor() {
    const btn = document.querySelector('button');
    this.names = ['Alex', 'Max', 'Anna'];
    this.currentName = 0;

    self = this;
    this.names.forEach(function(name) {
      console.log('Index of "' + name + '" is ', self.names.indexOf(name));
      // console.log(this.names.indexof(name)); // Ошибка: неверный контекст!
    });

    btn.addEventListener('click', this.addName.bind(this));
    // btn.addEventListener('click', this.addName()); // Ошибка: неверная передача обработчика!
    // btn.addEventListener('click', this.addName); // Ошибка: неверный контекст!

    // Вариант со стрелочными функциями (сохраняется правильный контекст)
    // btn.addEventListener('click', () => {
    //  this.addName();
    // });
  }

  addName() {
    console.log(this);
    const name = new NameField(this.names[this.currentName]);
    this.currentName++;
    if (this.currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}

const gen = new NameGenerator();

// 2. Смена контекста вызова
let person = {
  name: 'Alex',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  personInfo(showAge, showHobbies) {
    let resultInfo = 'Name is ' + this.name;
    if (showAge) {
      resultInfo += ', age is ' + this.age;
    }

    if (showHobbies) {
      resultInfo += ' and the user has hobbies: ' + (this.hobbies.length > 0);
    }

    console.log(resultInfo);
  },
};

let anotherPerson = {
  name: 'Anna',
  age: 30,
  hobbies: ['Fitness', 'Cats'],
};

person.personInfo(true, false); // "Alex"

let personInfoForAnna = person.personInfo.bind(anotherPerson);
personInfoForAnna(true, false); // "Anna"

person.personInfo.call(anotherPerson, true, false); // "Anna"
person.personInfo.apply(anotherPerson, [true, false]); // "Anna"
