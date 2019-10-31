const Arithmetic = class {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  div() {
    if (this.b === 0) {
      throw new Error('Incorrect divisor');
    }

    return this.a / this.b;
  }
};

export default Arithmetic;
