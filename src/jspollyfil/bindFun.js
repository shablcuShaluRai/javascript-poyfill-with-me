let person = {
  fname: "shablcu",
  lname: "lname"
};

function getPersonDetails() {
  return this.fname + " " + this.lname;
}

const personDetails = getPersonDetails.bind(person);

console.log("personDetails", personDetails());

Function.prototype.customBind = function (...args) {
  let obj = this,
    restParams = args.slice(1);
  return function (arg) {
    return obj.apply(args[0], [...restParams, arg]);
  };
};

const customPersonDetails = getPersonDetails.customBind(person);

console.log("personDetails", customPersonDetails());
