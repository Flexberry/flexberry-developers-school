// 1. Переменные и константы
console.log(personName); // 'Alex'!

var personName = 'Alex';
let age = 27;
const hasHobbies = true;

// 2. Локальная и глобальная области видимости. Всплытие (hoisting)
if (1 == 1) {
  var job = 'Freelancer'; // Помещается в глобальную область видимости!
  let married = false; // Видимость на уровне блока!
}

console.log(job); // 'Freelancer'
console.log(window.job); // 'Freelancer'
console.log(married); // Ошибка!

hasHobbies = false; // Ошибка!

console.log(summarizeUser(personName, age, hasHobbies)); // Нет ошибки!
console.log(summarizeUserExpr(personName, age, hasHobbies)); // Ошибка!

// 3. Function Declaration vs Function Expression
// Объявление функции (Function Declaration)
function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
  );
}

// Функциональное выражение (Function Expression)
const summarizeUserExpr = function(userName, userAge, userHasHobby) {
  return (
    'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
  );
};
