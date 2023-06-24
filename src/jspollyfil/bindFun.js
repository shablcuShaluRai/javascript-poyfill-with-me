let person = {
  fname: "shablcu",
  lname: "lname"
};

function getPersonDetails(greet) {
  return greet + " " + this.fname + " " + this.lname;
}

const personDetails = getPersonDetails.bind(person, "Hello");

console.log("personDetails", personDetails());

Function.prototype.customBind = function (...args) {
  let obj = this,
    restParams = args.slice(1);
  return function (arg) {
    return obj.apply(args[0], [...restParams, arg]);
  };
};
const customPersonDetails = getPersonDetails.customBind(person, "Hi");

console.log("personDetails", customPersonDetails());

// Another way to writ polyfill of bind function
Function.prototype.customBinding = function (scope, ...args) {
  console.log("scope", scope, args);
  scope.this = this;
  return function () {
    return scope.this(...args);
  };
};

const customPersonDetailss = getPersonDetails.customBinding(person, "Hiii");

console.log("personDetails", customPersonDetailss());
