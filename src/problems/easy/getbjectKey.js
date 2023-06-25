// Write a JavaScript program to list the properties of a JavaScript object.

var student = {
  name: "Shablcu",
  class: "VI",
  rollno: 12
};

function isObject(obj) {
  return typeof obj === "object" && !!obj;
}
function getObjectKey(student) {
  let result = [];
  if (!isObject(student)) return [];
  for (let key in student) {
    result.push(key);
  }
  return result.join(",");
}
console.log("getObjectKey", getObjectKey(student));

console.log("object", Object.keys(student).join(","));
