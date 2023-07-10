// Push: The push() method adds the specified elements to the end of an array and returns the new length of the array.

const arr = [];
arr.push(34);
arr.push(38);
arr.push(42);
console.log("arr", arr);

Array.prototype.customPush = function (...elements) {
  const arr = this;
  if (typeof arr !== "object" || arr.constructor !== Array) {
    console.log("this", this);
    throw new TypeError("Array.prototype.push called on only arrays");
  }

  arr.length += elements.length;
  for (let i = 0; i < elements.length; i++) {
    arr[arr.length - i - 1] = elements[i];
  }
  return arr.length;
};
const customArr = [10, 20];
customArr.customPush(10);
console.log("customArr", customArr);
