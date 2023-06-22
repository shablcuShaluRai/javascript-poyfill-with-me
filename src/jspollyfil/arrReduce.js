const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const getNum = (num1, num2) => num1 + num2;

const result = arr.reduce(getNum, 0);
console.log("result", result);

// reduce protype
Array.prototype.customReduce = function (cb, intialValue) {
  let accumulator = intialValue;
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (accumulator) {
      accumulator = cb(arr[i], accumulator);
    } else {
      accumulator = arr[i];
    }
  }
  return accumulator;
};

const customResult = arr.customReduce(getNum, 0);
console.log("customResult", customResult);
