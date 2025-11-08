/* LEVEL-1: WARM-UP (BASIC) */
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

/*LEVEL-2: LOGIC CHALLENGES */

// Return the unique value from the array
const originalArray = [2, 4, 6, 3, 3, 4, 6, 5];
const uniqueArray = getUniqueValues(originalArray);
function getUniqueValues(arr) {
  return [...new Set(arr)];
}

console.log(uniqueArray);

// count the number of each character appears in a string.
function countcharacters(str) {
  const charCounts = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  return charCounts;
}

const myStr = "world championship";
const results = countcharacters(myStr);

console.log(results);
