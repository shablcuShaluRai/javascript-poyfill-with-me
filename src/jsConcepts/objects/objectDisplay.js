console.log("object display");

const person = {
  name: "Hello world",
  age: 20,
  address: "India"
};

// simple way to display object properties
console.log(person.name + person.age + person.address);

// another way to show object value
console.log("Json stringify", JSON.stringify(person));

// Note: json stringify does not stringify/convert function

const newobj = {
  name: " new obj",
  getName: function () {
    console.log("hello");
  }
};

console.log("json", JSON.stringify(newobj)); //output:  {"name":" new obj"}

// inorder to fix above issue

newobj.getName = newobj.getName.toString();

console.log("json after", JSON.stringify(newobj));

// it will stringify the date object

const obj1 = {
  name: "obj1",
  date: new Date()
};
console.log("json", JSON.stringify(obj1));
//output: json {"name":"obj1","date":"2023-07-06T17:43:58.163Z"}

//It is also possible to stringify JavaScript arrays:

const arr = ["John", "Peter", "Sally", "Jane"];

console.log("array stringify", JSON.stringify(arr));

//output: ["John","Peter","Sally","Jane"]
