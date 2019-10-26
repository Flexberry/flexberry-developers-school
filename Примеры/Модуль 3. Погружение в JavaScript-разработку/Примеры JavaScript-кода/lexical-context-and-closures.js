// 1. Лексическое окружение
// Лексическое окружение: { sayPhrase, global-> }

let phrase = 'Hello';
// Лексическое окружение: { sayPhrase, phrase, global-> }

function sayPhrase(name) {
  // Лексическое окружение: { name, preparePhrase, outer-> }

  function preparePhrase(phrase, whoSays) {
    // Лексическое окружение: { phrase, whoSays, outer-> }
    return whoSays + ': ' + phrase;
  }

  let resultPhrase = preparePhrase(phrase, name);
  // Лексическое окружение: { name, preparePhrase, resultPhrase, outer-> }

  console.log(resultPhrase);
}

// Лексическое окружение создается при каждом вызове
sayPhrase('Alex');
sayPhrase('Anna');

// 2. Сохранение лексического окружения во вложенных функциях

// При использовании функции-конструктора
function User(name) {
  // У метода есть доступ к name
  this.sayHi = function() {
    console.log(name);
  };
}

let user = new User('John');
user.sayHi(); // есть доступ к внешней переменной "name"

// При возвращении функции из функции
function makeCounter() {
  let count = 0;

  return function() {
    return count++; // есть доступ к внешней переменной "count"
  };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// Удаление лексического окружения при "сборке мусора"
counter = null;
