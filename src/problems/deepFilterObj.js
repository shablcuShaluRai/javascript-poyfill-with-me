// Create a function in javascript which will take a nested object obj and a filter function filter as input and return the filtered object.

const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -3
      }
    },
    h: "Good Night World"
  },
  i: "sds",
  j: [1, 2, 4]
};

const filter = (s) => typeof s === "string";

// Output:
// {
//   b: {
//     c: "Hello World",
//     h: "Good Night World",
//   },
// i: "sds"
// };

function deepFilter(obj, filter) {
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "object" && !Array.isArray(value)) {
      deepFilter(value, filter);
    } else {
      if (filter(value) === false) {
        delete obj[key];
      }
    }
    if (JSON.stringify(value) === "{}") {
      delete obj[key];
    }
  }
  return obj;
}

console.log("output", deepFilter(obj, filter));
