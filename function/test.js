// Even or Odd (level-1, 1)
const isOddEven = function (num) {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(isOddEven(46));
console.log(isOddEven(599));

// Revese a string (level-1, 2)
const reverseStr = function (str) {
  return str.split("").reverse().join("");
};

console.log(reverseStr("Ronaldo"));

// Find the largest number of three numbers (level-1,3)
const largestNum = function (...arr) {
  return Math.max(...arr);
};

let myArr = [9, 23, 17];

console.log(largestNum(...myArr));
