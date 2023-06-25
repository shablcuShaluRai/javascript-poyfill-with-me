function checkPalindrom(str) {
  let reverseStr = "";
  //   console.log("str", str, str.split("").reverse());
  //   return str === str.split("").reverse().join("");
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  console.log("str", str, reverseStr);
  return str === reverseStr;
}

console.log("checkPalindrom", checkPalindrom("abcdba"));
