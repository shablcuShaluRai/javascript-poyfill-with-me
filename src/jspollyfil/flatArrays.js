// create flat array
const arr = [2, 3, [1, 2, 8], [3, 4], [4, 5], [5, [6, [7, [8, [[10]]]]]]];

// quick way

console.log("result?>>>", arr.flat(Infinity));

function flatArrays(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      console.log("result", result);
      result = result.concat(flatArrays(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log("flatArrays", flatArrays(arr));

// create prototype of flatArrays
// Array.prototype.flatArrayss = function () {
//   const arr = this;
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatArrays(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log("flatArrayss", [1, 2, 3, 4].flatArrayss());

//aother example

// const data = [
//   {
//     name: "data-1",
//     children: [
//       {
//         name: "child-1",
//         value: "child-1"
//       },
//       {
//         name: "child-2",
//         value: "child-2"
//       }
//     ]
//   },
//   {
//     name: "data-2",
//     children: [
//       {
//         name: "child-3",
//         children: [
//           {
//             name: "child-31",
//             value: "child-31"
//           },
//           {
//             name: "child-32",
//             value: "child-32"
//           }
//         ]
//       }
//     ]
//   }
// ];

// function flatArrays(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i].children)) {
//       result = result.concat(flatArrays(arr[i].children));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log("result", flatArrays(data));
