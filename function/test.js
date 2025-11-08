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

/* LEVEL-3: FUNCTION MASTERY */

// makemulitiplier(n) that returns a new function which multiplies anything by n.
function makemulitiplier(n) {
  return function (x) {
    return n * x;
  };
}

const multiplyBy6 = makemulitiplier(6);

console.log(multiplyBy6(7));

/**
 * Calculates the total price of an item, optionally applying a tax rate.
 *
 * @param {number} price The base price of the item.
 * @param {number} [taxRate=0.05] The tax rate to apply (e.g., 0.05 for 5%)
 * @returns {number} The total price including tax
 */
function calculateTotalPrice(price, taxRate = 0.05) {
  // Ensure price is a number
  if (typeof price !== "number") {
    throw new Error("Price must be a number.");
  }

  // Calculate tax amount
  const taxAmount = price * taxRate;

  // Calculate total price
  const totalPrice = price + taxAmount;

  return totalPrice;
}

// Total with default tax
const itemPrice1 = 300;
const totalWithDefaultTax = calculateTotalPrice(itemPrice1);
console.log(`Total price with default tax: $${totalWithDefaultTax.toFixed(2)}`);

// Total with custom tax
const itemPrice2 = 500;
const totalWithCustomTax = calculateTotalPrice(itemPrice2, (taxRate = 0.09));
console.log(`Total price with custom tax: $${totalWithCustomTax.toFixed(2)}`);

// Function as a parameter and runs it 5 times
function runFunctionFiveTimes(funcToRun) {
  for (let i = 0; i < 5; i++) {
    funcToRun(); // Execute the passed function
  }
}

// Example usage:
function sayLoveYou() {
  console.log("I Love You!");
}

function countUp() {
  let count = 0;
  return function () {
    count++;
    console.log("count: " + count);
  };
}

// Running sayLoveYou five times
console.log("--- Running sayLoveYou five times ---");
runFunctionFiveTimes(sayLoveYou);

// Running a function that maintains its own state five times
console.log("\n--- Running countUp five times ---");
const counter = countUp(); // Get the inner function
runFunctionFiveTimes(counter);

// LEVEL-4: Higher Level(Closures & Callbacks)
// Creating counter function using closures
function temporary() {
  let counter = 0;

  return function () {
    counter += 1;
    return counter;
  };
}

const add = temporary(); // add is a function at the end

add();
console.log(add()); // 2
add();
console.log(add()); // 4

//  a function once(fn) that: runs the given function only once returns the result every next call returns the first result
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

// Use case Example
function primary() {
  let counter = 0;
  counter += 1;
  return counter;
}

const firstFunc = once(primary);

console.log(firstFunc());
console.log(firstFunc());
