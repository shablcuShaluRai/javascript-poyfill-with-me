//
// The in operator returns true if the specified property is in the specified object or it’s property chain.

const obj = {
  name: "Hello words",
  age: 20,
  isNational: false,
  e: null,
  f: undefined
};

// for..in loop only prints enumerable only

Object.defineProperty(obj, "d", {
  value: 5,
  enumerable: false // by default enumerable is false
  //   enumerable: true
});
// console.log("key name", "name" in obj);

for (const key in obj) {
  console.log("key", key);
  if (obj[key]) {
    // this check will not work for any false value
    // if you have to check on the value then use this
    console.log("obj key", obj[key]);
  }
  if (Object.hasOwn(obj, key)) {
    // if you have to check on keys then use this, even though key is null or undefined then also it works
    console.log("obj hasOwn", obj[key]);
  }
  if (key in obj) {
    console.log("key, value", key, obj[key]);
  }
}
// Output:
// key name
//  obj key Hello words
//  obj hasOwn Hello words
//  key, value name Hello words
//  key age
//  obj key 20
//  obj hasOwn 20
//  key, value age 20
//  key isNational
//  obj hasOwn false
//  key, value isNational false
//  key e
//  obj hasOwn null
//  key, value e null
//  key f
//  obj hasOwn undefined
//  key, value f undefined

// iterating over the properties of an object

const example = { foo: true, bar: true, c: undefined, d: null, e: false };
for (const name of Object.keys(example)) {
  console.log("key name", name, example[name]);
}

// But if you need to use for...in, you can use Object.hasOwn() to skip the inherited properties:

for (const key in example) {
  if (Object.hasOwn(example, key)) {
    console.log("for in key", key, example[key]);
  }
  console.log("for in key outside", key, example[key]);
}

const arr = ["a", "b", "c"];
console.log("obj", Object.hasOwn(arr, 2)); // true
console.log("obj", Object.hasOwn(arr, 5)); //false
