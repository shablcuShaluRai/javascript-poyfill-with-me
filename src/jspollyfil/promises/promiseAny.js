const p1 = Promise.reject("P1 has rejected");

// const p1 = Promise.resolve("P1 has resolved");

const p4 = new Promise((resolve, reject) => {
  let status = true;
  setTimeout(() => {
    if (status) {
      resolve("P4 has resolved ");
    } else {
      reject("p4 has rejected");
    }
  }, 1000);
});

const p2 = 4;

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 has rejected "); // need to enable to test error case
    // resolve("P3 has resolved ");
  }, 3000);
});

// Promise.any() - It executes all passed promises
// parallelly and returns the first resolved promise result.
// 💡Promise.any() Cases :-
// 1) If no promise passes, returns the AggregateError "All promises were rejected".
// 2) If passed empty [], returns error.

// Promise.any([p1, p2, p3, p4])
//   .then((res) => console.log("s", res))
//   .catch((e) => console.log(e));

// Promise.any([p1, p3])
//   .then((res) => console.log("s", res))
//   .catch((e) => console.log(e));

// Promise.any([])
//   .then((res) => console.log("s", res))
//   .catch((e) => console.log(e));

Promise.customAny = function (promiseArr) {
  const error = [];
  let failedPromise = 0;
  return new Promise((resolve, reject) => {
    if (promiseArr.length === 0) {
      reject(new Error());
    }
    promiseArr.forEach((element, index) => {
      Promise.resolve(element)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          failedPromise++;
          error[index] = e;
          if (failedPromise === promiseArr.length) {
            reject(new Error("All promises reject"));
            // new AggregateError(
            //   [new Error("All promises reject")],
            //   "promises Reject"
            // )
          }
        });
    });
  });
};

// Promise.customAny([p1, p2])
//   .then((res) => console.log("s", res))
//   .catch((e) => console.log("promises has rejected"));

Promise.customAny([p3])
  .then((res) => console.log("s", res))
  .catch((e) => console.log(e));
