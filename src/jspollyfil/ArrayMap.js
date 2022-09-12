const arr = [1, 2, 3, 4, 5, 6, 7];

const result = arr.map((x, i, passedArr) => x * 2);
console.log("result", result);

Array.prototype.customMap = function (cb) {
  const arr = [];
  const customArr = this;
  for (let i = 0; i < customArr.length; i++) {
    arr.push(cb(customArr[i], i, customArr));
  }
  return arr;
};

const results = arr.customMap((x, index, customArr) => x * 3);
console.log("results", results);
