const Person = {
  firstName: "Maulana",
  lastName: "Gans",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 70,
  height: 172,
  weightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100;
  },
  needDiet: function () {
    const weightIdeal = this.weight;
    if (weightIdeal - 5 > this.weight) {
      return "You need more protein" + (weightIdeal - this.weight) + "kg";
    } else if (weightIdeal + 5 > this.weight) {
      return `You are in a good shape`;
    }
  },
};
console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());

// const countries = {
//   ID: {
//     province: ["Jawa Barat", "Bali", "Jakarta"],
//     city: ["Singaraja", "gianyar", "bandung"],
//   },
//   MY: {},
//   TH: {
//     province: [],
//   },
// };

// optional chaining, ganti objek yang tidak ditemukan
// console.log(countries?.TH?.province ?? "Not found");s
// console.log(Person.firstName);
// console.log(Person.fullName());
