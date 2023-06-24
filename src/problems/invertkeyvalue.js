// Given an object obj, we have to invert its key and value for each entries. Inversion will result in value being used as key and key as value.

const obj = { age: 12, name: "xyz", hairColor: "black" };

function invertKeyValue(obj) {
  let output = {};
  for (let key in obj) {
    output[obj[key]] = key;
  }
  return output;
}

console.log("invertKeyValue", invertKeyValue(obj));
