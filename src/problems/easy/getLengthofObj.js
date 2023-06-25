//Write a JavaScript program to get the length of a JavaScript object.

var student = {
  name: "Shablcu",
  sclass: "VI",
  rollno: 12
};

// Type: 1
console.log("object length", Object.keys(student).length);

// regular function to get keys from object
function getKeysFromObj(obj) {
  let keysResult = [];
  for (let key in obj) {
    keysResult.push(key);
  }
  return keysResult;
}

console.log("keys result", getKeysFromObj(student).length);
