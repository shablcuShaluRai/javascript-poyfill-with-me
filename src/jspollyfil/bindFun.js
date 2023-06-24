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
  console.log("args bind", args);
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

// Call

// The call() method calls the function with a given this value and arguments provided individually

const personCall = getPersonDetails.call(person, "hi");
console.log("personCall", personCall);

Function.prototype.customCall = function (scope, ...args) {
  console.log("this", args);
  console.log("scope", scope);
  scope.this = this;
  return scope.this(...args);
};

const customPersonCall = getPersonDetails.customCall(person, "hello");
console.log("personCall", customPersonCall);

// Apply

const applyPersonObj = getPersonDetails.apply(person, ["Hi"]);
console.log("apply person obj", applyPersonObj);

Function.prototype.customApply = function (scope, args) {
  scope.this = this;
  return scope.this(...args);
};

const applyCustomPersonObj = getPersonDetails.apply(person, ["Hi"]);
console.log("apply custom person obj", applyCustomPersonObj);

// other example to use call, apply and bind.

// call

console.log("max call", Math.max.call(1, 8, 2, 3, 4, 5));
console.log("max call", Math.max.apply(null, [1, 8, 2, 3, 4, 5]));
const dt = Math.max.bind(this);
console.log("bind example", dt(1, 3, 4, 5, 6, 7));
