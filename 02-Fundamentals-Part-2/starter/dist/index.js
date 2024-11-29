"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Kevin = {
    firstName: "Kevin",
    lastName: "Alpizar",
    birthYear: 1998,
    job: "Teacher",
    friends: ["Michael", "Steven", "Peter"],
    hasDriverLicense: true,
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },
};
const currentAge = Kevin.calcAge();
console.log(currentAge);
console.log(currentAge);
console.log(currentAge);
