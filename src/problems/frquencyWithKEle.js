// Given an array of elements arr and a number k find an element which has occurred K times.

// If there are no such element then return -1.

const arr = [2, 4, 4, 3, 3, 7, 7, 7, 8];
const k = 8;

function kFrequency(arr, k) {
  let result = {};
  arr.forEach((element) => {
    if (result[element]) {
      result[element] = result[element] + 1;
    } else {
      result[element] = 1;
    }
  });
  let output = [];
  for (let key in result) {
    if (result[key] === k) {
      output.push(key);
    }
  }
  return output.length > 0 ? Math.min(...output).toString() : -1;
}

console.log("k frequency", kFrequency(arr, k));
