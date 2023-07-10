// const p1 = Promise.reject("P1 has rejected");

const p1 = Promise.resolve("P1 has resolved");

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

// Promise.race() - It executes all passed promises parallelly and returns the first resolved or rejected promise result.
// 💡Promise.race() Case :-
// 1) If passed empty [], forever pending.

// Promise.race([p4, p1, p2, p3])
//   .then((res) => console.log("res", res))
//   .catch((e) => console.log("e", e));

Promise.race([p3, p4])
  .then((res) => console.log("original race", res))
  .catch((e) => console.log("e", e));

Promise.customRace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((element) => {
      Promise.resolve(element)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => e);
    });
  });
};

Promise.race([p3, p4])
  .then((res) => console.log("custom race", res))
  .catch((e) => console.log("custom error", e));
