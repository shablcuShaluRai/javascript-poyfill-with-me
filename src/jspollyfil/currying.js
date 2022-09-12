const add = (a) => a + 10;

const multiply = (a) => a * 20;

function factorail(n) {
  if (n === 1) return 1;
  return n * factorail(n - 1);
}

// console.log("fa", factorail(5));
// console.log("fa", multiply(5)(5));
// console.log("fa", add(5)(5));

// const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
function compose(...rest) {
  return function (b) {
    let result = b;
    for (let i = rest.length - 1; i >= 0; i--) {
      result = rest[i](result);
    }
    return result;
  };
}

console.log("compose", compose(add, multiply, factorail)(3));
