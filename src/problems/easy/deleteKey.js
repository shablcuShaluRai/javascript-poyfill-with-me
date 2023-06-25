//  Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var student = {
  name: "Shablcu",
  sclass: "VI",
  rollno: 12
};

function deleteKeyByKeyname(obj, name) {
  for (let key in obj) {
    if (name === key) {
      delete obj[key];
    }
  }
  return obj;
}

console.log("deleteKeyByKeyname", deleteKeyByKeyname(student, "rollno"));
