const getRandomGreaterNum = (resolve, reject) => {
  if (Math.random() * 10 > 0.5) {
    resolve("random number is more than 5");
  } else {
    reject("random number is less than 5");
  }
};

// Promise is an object that is used for handling asynchronous operations in JavaScript.
// π‘Promise has 4 states :-
// π fulfilled: Action related to the promise succeeded (resolve) => result in .then().
// π rejected: Action related to the promise failed (reject) => result in .catch().
// π pending: Promise is still pending i.e. not fulfilled or rejected yet.
// π settled: Promise has fulfilled or rejected => .finally().

// new Promise(getRandomGreaterNum)
//   .then((p) => console.log("p", p))
//   .catch((e) => console.log(e))
//   .finally(() => console.log("finally, got the number"));

const getRandomGreaterNums = () => {
  if (Math.random() * 10 > 0.5) {
    return "random number is more than 5";
  } else {
    return "random number is less than 5";
  }
};

Promise.resolve(getRandomGreaterNums())
  .then((res) => console.log("res", res))
  .catch((e) => console.log("e", e));
