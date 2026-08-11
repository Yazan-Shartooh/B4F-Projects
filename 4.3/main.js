// const yazan = {
//   name: "yazan",
//   family: "shartooh",
//   age: 25,
//   fun: function () {
//     return this.name + " " + this.family;
//   },
// };
// const lena = {
//   name: "lena",
//   family: "al khatib",
//   age: 22,
//   fun: function () {
//     return this.name + " " + this.family;
//   },
// };
// const ali = {
//   name: "ali",
//   family: "edris",
//   age: 25,
//   fun: function () {
//     return this.name + " " + this.family;
//   },
// };

class Person {
  constructor(name, family, age, salary) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.salary = salary;
  }
  fun() {
    return this.name + " " + this.family;
  }
  raise() {
    this.salary = this.salary * 1.25;
    return this;
  }
  printSalary() {
    return this.salary;
  }
}

const yazan = new Person("yazan", "shartooh", 25, 1000);
console.log(yazan.raise().printSalary());
