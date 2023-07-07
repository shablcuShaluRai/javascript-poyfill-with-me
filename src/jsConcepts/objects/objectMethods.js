// assign: The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// it does shallow copying, it copies property values
// it changes the target original object as well ie. target or first parameter
// if we change in the nested label then property value will change for source and target both

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5, d: 9 };
const emptyObj = {};
const returnedTarget = Object.assign(target, source);
const newReturnTarget = Object.assign(emptyObj, target);
const newSource = Object.assign({ source: "Hello source" }, source);
console.log("target", target);
console.log("source", source);
console.log("emptyObj", emptyObj);
console.log("returned obj", returnedTarget);
console.log("newReturnTarget", newReturnTarget);
console.log("newSource", newSource);

// console.log(Object.assign()); // TypeError: Cannot convert undefined or null

const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2);

// update source
obj1.a = 20;
console.log("update 1", obj1); //{ a: 0, b: { c: 20 } };
console.log("update 1", obj2); // { a: 0, b: { c: 0 } };

// updated target

obj2.a = 40;
console.log("update 2", obj1);
console.log("update 2", obj2);

// nested label changes
console.log(">>>>>>nested label changes>>>>>>>");
obj1.b.c = 190; // either change both value will change
console.log("obj1", obj1);
console.log("obj2", obj2);

console.log(">>>>>>nested label changes>>>>>>>");

// we can target multiple object

const multipleTarget = Object.assign({}, target, source);
console.log("multipleTarget", multipleTarget);

// Copying symbol-typed properties

const o1 = { a: 1 };
const o2 = { [Symbol("foo")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log("symbol obj", obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]

//Properties on the prototype chain and non-enumerable properties cannot be copied

const newObj = Object.create(
  // foo is on obj's prototype chain.
  { foo: 1 },
  {
    bar: {
      value: 2 // bar is a non-enumerable property.
    },
    baz: {
      value: 3,
      enumerable: true // baz is an own enumerable property.
    }
  }
);

const copy = Object.assign({}, newObj);
console.log(copy); // { baz: 3 }

const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");
const v5 = ["ant"];

const allObj = Object.assign({}, v1, null, v2, undefined, v3, v4, v5);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log("allObj", allObj); // { "0": "a", "1": "b", "2": "c" }
// we will learn more about deep clone later

// deep clone

const obj3 = { a: 0, b: { c: 10 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log("obj4", obj4); // { a: 0, b: { c: 0 } }
console.log("obj3", obj3);

// another way to perform deep copy

const deepCopyObj = JSON.parse(JSON.stringify(obj3));
deepCopyObj.b.c = 230;
deepCopyObj.a = 200;
console.log("obj3", obj3);
console.log("deepCopy", deepCopyObj);
