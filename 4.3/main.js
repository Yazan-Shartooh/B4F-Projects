// // const yazan = {
// //   name: "yazan",
// //   family: "shartooh",
// //   age: 25,
// //   fun: function () {
// //     return this.name + " " + this.family;
// //   },
// // };
// // const lena = {
// //   name: "lena",
// //   family: "al khatib",
// //   age: 22,
// //   fun: function () {
// //     return this.name + " " + this.family;
// //   },
// // };
// // const ali = {
// //   name: "ali",
// //   family: "edris",
// //   age: 25,
// //   fun: function () {
// //     return this.name + " " + this.family;
// //   },
// // };

// class Person {
//   constructor(name, family, age, salary) {
//     this.name = name;
//     this.family = family;
//     this.age = age;
//     this.salary = salary;
//   }
//   fun() {
//     return this.name + " " + this.family;
//   }
//   raise() {
//     this.salary = this.salary * 1.25;
//     return this;
//   }
//   printSalary() {
//     return this.salary;
//   }
// }

// const yazan = new Person("yazan", "shartooh", 25, 1000);
// console.log(yazan.raise().printSalary());

// const operation = (data, fun) => {
//   const temp = [...data];
//   for (let i = 0; i < temp.length; i++) {
//     temp[i] = fun(temp[i]);
//   }
//   return temp;
// };

// const data = [1, 2, 3, 4];
// console.log(operation(data, (x) => x * x));

const filter = (data, f = (x) => true) => {
  const temp = [];
  for (let i = 0; i < data.length; i++) {
    if (f(data[i])) {
      temp.push(data[i]);
    }
  }
  return temp;
};

let data = [1, 2, 3, 4];
console.log(filter(data, (x) => x >= 3));
