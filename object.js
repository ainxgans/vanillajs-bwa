const Person = {
  firstName: "Maulana",
  lastName: "Gans",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 50,
  height: 172,
  isWeightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100;
  },
};

console.log(Person.firstName);
console.log(Person.fullName());
