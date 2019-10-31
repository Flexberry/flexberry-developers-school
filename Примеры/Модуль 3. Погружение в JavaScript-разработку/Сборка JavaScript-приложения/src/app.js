import fooDefault from './foo';
import $ from 'jquery';

class SimpleDate {
  constructor (year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

let someDate = new SimpleDate(2019, 8, 3);

console.log(someDate, fooDefault);

$.when($.ready).then(function() {
  alert('Hello!');
});