// problems:
// Given an nested object obj which can have any type of value, deep flatten it and return the new object in Javascript.

const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56
    },
    Q: [1, 2]
  }
};

// Output:
// {
//   "A": "12"
//   "B": 23,
//   "C.O.L": 56,
//   "C.P": 23,
//   "C.Q.0": 1,
//   "C.Q.1": 2,
// }
function getDeepFlatten(obj, prefix = "") {
  let output = {};
  for (let key in obj) {
    let val = obj[key];
    let updatedKey = prefix === "" ? key : `${prefix}.${key}`;
    if (typeof val === "object") {
      let newObj = getDeepFlatten(val, updatedKey);
      output = {
        ...output,
        ...newObj
      };
    } else {
      output[updatedKey] = val;
    }
  }
  return output;
}

console.log("getDeepFlatten(obj)", getDeepFlatten(obj));
