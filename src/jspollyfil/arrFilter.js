const arr = [2, 3, 4, 5, 6, 7, 8];

const getEven = (ar) => ar % 2 === 0;

const filteredEle = arr.filter(getEven);

console.log("filteredEle", filteredEle);

// filter protoype using for loop

Array.prototype.customFilter = function (cb) {
  let result = [];
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
const customFilteredEle = arr.customFilter(getEven);

console.log("customFilteredEle", customFilteredEle);

// filter protoype using for each loop

// Note: we should avoid using for each loop in polyfill
// because some browser does not support.

// Array.prototype.customFilter = function (cb) {
//   let result = [];
//   const arr = this;
//   arr.forEach((ele) => {
//     if (cb(ele)) {
//       result.push(ele);
//     }
//   });
//   return result;
// };

// const customFilteredEle = arr.customFilter(getEven);

// console.log("customFilteredEle", customFilteredEle);

// write a function like filter

function customFilters(arr, cb) {
  let result = [];
  arr.forEach((ele) => {
    if (cb(ele)) {
      result.push(ele);
    }
  });
  return result;
}

const customFilteredArr = customFilters(arr, getEven);

console.log("customFilteredElem", customFilteredArr);
