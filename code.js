// Starter code for Create Your Own Array Methods Activity:

// sample arrays for testing your functions:
let testNumsArray = [3, 1, -5, 2, 105, -24, 495, 8, 246];
let testWordsArray = ["potato", "rainbow", "cloud", "duck", "orange", "three"];

// This is one example of implementing the functionality of forEach:
function newForEach(array, callback) {
  for (let index = 0; index < array.length; index = index + 1) {
    let currentItem = array[index];
    callback(currentItem, index, array);
  }
}

// complete the functions below so that they mimic the built in methods
function newSome(array, callback) {
  let numFalse = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    } else {
      numFalse++;
    }
  }
  if (numFalse == array.length) {
    return false;
  }
}

function newEvery(array, callback) {
  let numTrue = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      numTrue++;
    } else {
      return false;
    }
  }
  if (numTrue == array.length) {
    return true;
  }
}

function newFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}

function newFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}

function newMap(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

function newFilter(array, callback) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/**
 * TESTS -----------------------------------------------
 */
const echo = function (val) {
  console.log(val);
};
const addTwo = function (val) {
  return val + 2;
};
const negate = function (val) {
  return val * -1;
};
const isAbove10 = function (val) {
  return val > 10;
};
const isAbove678 = function (val) {
  return val > 678;
};
const isNegative = function (val) {
  return val < 0;
};
const isPositive = function (val) {
  return val > 0;
};
const isNumber = function (val) {
  return typeof val === "number";
};
let nums = [-3, -1, 0, 1, 2, 30, 45, 678];

console.group("newForEach");
console.log(
  `newForEach(nums, echo) === ${newForEach(
    nums,
    echo
  )}; should be ${nums.forEach(echo)}`
);
console.groupEnd();

console.group("newMap");
console.log(
  JSON.stringify(newMap(nums, isNegative)) ===
    JSON.stringify(nums.map(isNegative)),
  `newMap(nums, isNegative) === ${JSON.stringify(
    newMap(nums, isNegative)
  )}; should be ${JSON.stringify(nums.map(isNegative))}`
);
console.log(
  JSON.stringify(newMap(nums, addTwo)) === JSON.stringify(nums.map(addTwo)),
  `newMap(nums, addTwo) === ${JSON.stringify(
    newMap(nums, addTwo)
  )}; should be ${JSON.stringify(nums.map(addTwo))}`
);
console.groupEnd();

console.group("newSome");
console.log(
  JSON.stringify(newSome(nums, isNegative)) ===
    JSON.stringify(nums.some(isNegative)),
  `newSome(nums, isNegative) === ${newSome(
    nums,
    isNegative
  )}; should be ${nums.some(isNegative)}`
);
console.log(
  JSON.stringify(newSome(nums, isPositive)) ===
    JSON.stringify(nums.some(isPositive)),
  `newSome(nums, isPositive) === ${newSome(
    nums,
    isPositive
  )}; should be ${nums.some(isPositive)}`
);
console.log(
  JSON.stringify(newSome(nums, isAbove10)) ===
    JSON.stringify(nums.some(isAbove10)),
  `newSome(nums, isAbove10) === ${newSome(
    nums,
    isAbove10
  )}; should be ${nums.some(isAbove10)}`
);
console.log(
  JSON.stringify(newSome(nums, isAbove678)) ===
    JSON.stringify(nums.some(isAbove678)),
  `newSome(nums, isAbove678) === ${newSome(
    nums,
    isAbove678
  )}; should be ${nums.some(isAbove678)}`
);
console.groupEnd();

console.group("newFind");
console.log(
  JSON.stringify(newFind(nums, isNegative)) ===
    JSON.stringify(nums.find(isNegative)),
  `newFind(nums, isNegative) === ${newFind(
    nums,
    isNegative
  )}; should be ${nums.find(isNegative)}`
);
console.log(
  JSON.stringify(newFind(nums, isPositive)) ===
    JSON.stringify(nums.find(isPositive)),
  `newFind(nums, isPositive) === ${newFind(
    nums,
    isPositive
  )}; should be ${nums.find(isPositive)}`
);
console.log(
  JSON.stringify(newFind(nums, isAbove10)) ===
    JSON.stringify(nums.find(isAbove10)),
  `newFind(nums, isAbove10) === ${newFind(
    nums,
    isAbove10
  )}; should be ${nums.find(isAbove10)}`
);
console.log(
  JSON.stringify(newFind(nums, isAbove678)) ===
    JSON.stringify(nums.find(isAbove678)),
  `newFind(nums, isAbove678) === ${newFind(
    nums,
    isAbove678
  )}; should be ${nums.find(isAbove678)}`
);
console.groupEnd();

console.group("newFindIndex");
console.log(
  JSON.stringify(newFindIndex(nums, isNegative)) ===
    JSON.stringify(nums.findIndex(isNegative)),
  `newFindIndex(nums, isNegative) === ${newFindIndex(
    nums,
    isNegative
  )}; should be ${nums.findIndex(isNegative)}`
);
console.log(
  JSON.stringify(newFindIndex(nums, isPositive)) ===
    JSON.stringify(nums.findIndex(isPositive)),
  `newFindIndex(nums, isPositive) === ${newFindIndex(
    nums,
    isPositive
  )}; should be ${nums.findIndex(isPositive)}`
);
console.log(
  JSON.stringify(newFindIndex(nums, isAbove10)) ===
    JSON.stringify(nums.findIndex(isAbove10)),
  `newFindIndex(nums, isAbove10) === ${newFindIndex(
    nums,
    isAbove10
  )}; should be ${nums.findIndex(isAbove10)}`
);
console.log(
  JSON.stringify(newFindIndex(nums, isAbove678)) ===
    JSON.stringify(nums.findIndex(isAbove678)),
  `newFindIndex(nums, isAbove678) === ${newFindIndex(
    nums,
    isAbove678
  )}; should be ${nums.findIndex(isAbove678)}`
);
console.groupEnd();

console.group("newEvery");
console.log(
  JSON.stringify(newEvery(nums, isNegative)) ===
    JSON.stringify(nums.every(isNegative)),
  `newEvery(nums, isNegative) === ${newEvery(
    nums,
    isNegative
  )}; should be ${nums.every(isNegative)}`
);
console.log(
  JSON.stringify(newEvery(nums, isPositive)) ===
    JSON.stringify(nums.every(isPositive)),
  `newEvery(nums, isPositive) === ${newEvery(
    nums,
    isPositive
  )}; should be ${nums.every(isPositive)}`
);
console.log(
  JSON.stringify(newEvery(nums, isAbove10)) ===
    JSON.stringify(nums.every(isAbove10)),
  `newEvery(nums, isAbove10) === ${newEvery(
    nums,
    isAbove10
  )}; should be ${nums.every(isAbove10)}`
);
console.log(
  JSON.stringify(newEvery(nums, isNumber)) ===
    JSON.stringify(nums.every(isNumber)),
  `newEvery(nums, isNumber) === ${newEvery(
    nums,
    isNumber
  )}; should be ${nums.every(isNumber)}`
);
console.groupEnd();

console.group("newFilter");
console.log(
  JSON.stringify(newFilter(nums, isNegative)) ===
    JSON.stringify(nums.filter(isNegative)),
  `newFilter(nums, isNegative) === ${JSON.stringify(
    newFilter(nums, isNegative)
  )}; should be ${JSON.stringify(nums.filter(isNegative))}`
);
console.log(
  JSON.stringify(newFilter(nums, isPositive)) ===
    JSON.stringify(nums.filter(isPositive)),
  `newFilter(nums, isPositive) === ${JSON.stringify(
    newFilter(nums, isPositive)
  )}; should be ${JSON.stringify(nums.filter(isPositive))}`
);
console.log(
  JSON.stringify(newFilter(nums, isAbove10)) ===
    JSON.stringify(nums.filter(isAbove10)),
  `newFilter(nums, isAbove10) === ${JSON.stringify(
    newFilter(nums, isAbove10)
  )}; should be ${JSON.stringify(nums.filter(isAbove10))}`
);
console.log(
  JSON.stringify(newFilter(nums, isNumber)) ===
    JSON.stringify(nums.filter(isNumber)),
  `newFilter(nums, isNumber) === ${JSON.stringify(
    newFilter(nums, isNumber)
  )}; should be ${JSON.stringify(nums.filter(isNumber))}`
);
console.groupEnd();
