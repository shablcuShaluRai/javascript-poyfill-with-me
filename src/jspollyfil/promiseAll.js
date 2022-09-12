const p1 = new Promise((resolve, reject) => {
  let status = true;
  setTimeout(() => {
    if (status) {
      resolve("P1 has resolved ");
    } else {
      reject("p1 has rejected");
    }
  }, 1000);
});

const p2 = 4;

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("P3 has resolved ");
  }, 3000);
});

const p4 = Promise.resolve("P4 has resolved");

// Promise.all() - It executes all passed promises parallelly and improves the performance of the application
// 💡Promise.all() Cases :-
// 1) If all promises resolve, returns the array of results of all promises resolved.
// 2) If any promise fails, return the rejected promise error.
// 3) If passed empty [], returns empty [].

// Promise.all([p1, p2, p3, p4])
//   .then((rep) => console.log(rep))
//   .catch((e) => console.error(e));

Promise.customAll = function (promiseArr) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    if (promiseArr.length === 0) {
      resolve(result);
    }
    promiseArr.forEach((element, index) => {
      Promise.resolve(element)
        .then((res) => {
          result[index] = res;
          count++;
          if (count === promiseArr.length) {
            resolve(result);
          }
        })
        .catch((e) => reject(e));
    });
  });
};

Promise.customAll([p1, p2, p3, p4])
  .then((rep) => console.log(rep))
  .catch((e) => console.error(e));

// The Promise.all() method takes an iterable of promises
//  as an input, and returns a single Promise that
//  resolves to an array of the results of the input
//  promises. This returned promise will fulfill when
//  all of the input's promises have fulfilled,
//  or if the input iterable contains no promises.
//  It rejects immediately upon any of the input promises
//  rejecting or non-promises throwing an error,
//  and will reject with this first rejection message / error.
