/* eslint-disable no-undef */
import Arithmetic from '../src/arithmetic';

QUnit.module('Tests for div');
QUnit.test('Div for correct input is working', assert => {
  // Arrange
  const a = 10;
  const b = 5;
  const expectedResult = a / b;
  const arithmetic = new Arithmetic(a, b);

  // Act
  const actualResult = arithmetic.div();

  // Assert
  assert.equal(actualResult, expectedResult, `${a} / ${b} should be = ${expectedResult}`);
});

QUnit.test('Div for incorrect input is working', assert => {
  // Arrange
  const a = 10;
  const b = 0;
  const arithmetic = new Arithmetic(a, b);

  // Act & Assert
  assert.throws(
    () => {
      arithmetic.div();
    },
    Error,
    `should throw an exception with Error type when divisor is incorrect`
  );
});

QUnit.module('Tests for add');
QUnit.test('Add for correct input is working', assert => {
  // Arrange
  const a = 10;
  const b = 5;
  const expectedResult = a + b;
  const arithmetic = new Arithmetic(a, b);

  // Act
  const actualResult = arithmetic.add();

  // Assert
  assert.equal(actualResult, expectedResult, `${a} + ${b} should be = ${expectedResult}`);
});
