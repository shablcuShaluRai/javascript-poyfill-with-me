// Getters and setters allow you to define Object Accessors (

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  }
};
console.log("person", person.lang);
console.log("person set", (person.lang = "hindi"));

// what is the difference between function and setter

const obj = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  get getFullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(obj.fullName());
console.log(obj.getFullName);

// OBJECT.DEFINEPROPERTY
// below is not working
// const newObj = {
//   count: 0
// };

// Object.defineProperty(newObj, "increment", {
//   get: function () {
//     return this.count++;
//   }
// });

// Object.defineProperty(newObj, "decrement", {
//   get: function () {
//     return this.count--;
//   }
// });

// Object.defineProperty(newObj, "reset", {
//   get: function () {
//     return (this.count = 0);
//   }
// });
// Object.defineProperty(newObj, "add", {
//   set: function (value) {
//     console.log("this", this);
//     this.count += value;
//   }
// });
// Object.defineProperty(newObj, "subtract", {
//   set: function (value) {
//     this.count -= value;
//   }
// });

// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// // obj.increment;
// // obj.decrement;

// console.log(" new obj", newObj);
