"use strict";
/* 1. Write a program that takes an array of elements and counts the occurrences of each element using a Map.
Sample Input: const arr = [1, 2, 3, 2, 1, 4, 5, 4];
Sample Output: Map(5) {
1 =&gt; 2,
2 =&gt; 2,
3 =&gt; 1,
4 =&gt; 2,
5 =&gt; 1
} */

function countOccurrences(arr) {
  const elementCountMap = new Map();

  for (let element of arr) {
    if (elementCountMap.has(element)) {
      elementCountMap.set(element, elementCountMap.get(element) + 1);
    } else {
      elementCountMap.set(element, 1);
    }
  }

  return elementCountMap;
}

const arr = [1, 2, 3, 2, 1, 4, 5, 4];
const result = countOccurrences(arr);

console.log(result);



/* 2. Write a program that takes an array of integers and a target sum. Check if there exists a subarray with the given sum using a Set.
Sample Input: const arr = [1, 4, 20, 3, 10, 5];
const targetSum = 33;
Sample Output: true */

function subarrayWithSum(arr1, targetSum) {
  const set = new Set();
  let currentSum = 0;

  for (let num of arr1) {
    currentSum += num;

    if (currentSum === targetSum || set.has(currentSum - targetSum)) {
      return true;
    }

    set.add(currentSum);
  }

  return false;
}

const arr1 = [1, 4, 20, 3, 10, 5];
const targetSum = 33;

const result1 = subarrayWithSum(arr1, targetSum);
console.log(result1); // Output: true



/* 3. Write a program that takes an array of strings and groups anagrams together using a Map.
Sample Input: const arr = [&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;];
const chunkSize = 3;
Sample Output: Map(3) {
&quot;aet&quot; =&gt; [&quot;eat&quot;, &quot;tea&quot;, &quot;ate&quot;],
&quot;ant&quot; =&gt; [&quot;tan&quot;, &quot;nat&quot;],
&quot;abt&quot; =&gt; [&quot;bat&quot;]
} */

function groupAnagrams(arr2) {
  const anagramGroups = new Map();

  for (let word of arr2) {
    // Sort the characters in the word to create a key
    const sortedWord = word.split('').sort().join('');
    
    // If the key (sorted word) exists in the map, add the word to the group
    if (anagramGroups.has(sortedWord)) {
      anagramGroups.get(sortedWord).push(word);
    } else {
      // If the key doesn't exist, create a new group with the word
      anagramGroups.set(sortedWord, [word]);
    }
  }

  return anagramGroups;
}

const arr2 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result2 = groupAnagrams(arr2);

console.log(result2);



/* 4. Write a program that takes an array of strings and reverses each string in the array using the array methods.
Sample Input: const arr = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;];
Sample Output: [&quot;elppa&quot;, &quot;ananab&quot;, &quot;egnaro&quot;] */

const arr3 = ["apple", "banana", "orange"];

const reversedArray = arr3.map((str) => str.split('').reverse().join(''));

console.log(reversedArray);


/* 5. Write a program that takes an array of numbers and filters out the perfect square numbers using the array methods.
Sample Input const arr = [1, 2, 4, 7, 9, 16, 25];
Sample Output: [1, 4, 9, 16, 25] */

const arr4 = [1, 2, 4, 7, 9, 16, 25];

function isPerfectSquare(num) {
  return Math.sqrt(num) % 1 === 0;
}

const perfectSquares = arr4.filter((num) => isPerfectSquare(num));

console.log(perfectSquares);



/* 6. Write a program that takes two objects and merges them into a single object
Sample Input: const obj1 = { name: &quot;John&quot;, age: 30 };
const obj2 = { city: &quot;New York&quot;, occupation: &quot;Engineer&quot; };
Sample Output: {
name: &quot;John&quot;,
age: 30,
city: &quot;New York&quot;,
occupation: &quot;Engineer&quot;
}  */

const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", occupation: "Engineer" };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);


/* 7. Write a program that takes an array of objects and converts it into a single object using Object.assign() and Object.entries().
Sample Input: const arr = [
{ key: &quot;name&quot;, value: &quot;John&quot; },
{ key: &quot;age&quot;, value: 30 },
{ key: &quot;city&quot;, value: &quot;New York&quot; }
];
Sample Output: { name: &quot;John&quot;, age: 30, city: &quot;New York&quot; } */

const arr5 = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" }
];

const singleObject = Object.assign({}, ...arr5.map(obj => ({ [obj.key]: obj.value })));

console.log(singleObject);



/* 8. Write a program that takes a function with an array parameter and destructure the array inside the function.
Sample Input:
function displayArray([first, second, ...rest]) {
console.log(`First Element: ${first}`);
console.log(`Second Element: ${second}`);
console.log(`Rest Elements: ${rest}`);

}
const arr = [1, 2, 3, 4, 5];
Sample Output:
First Element: 1
Second Element: 2
Rest Elements: 3,4,5 */

function displayArray([first, second, ...rest]) {
  console.log(`First Element: ${first}`);
  console.log(`Second Element: ${second}`);
  console.log(`Rest Elements: ${rest}`);
}

const arr6 = [1, 2, 3, 4, 5];
displayArray(arr6);



/* 9. Write a program that takes a nested object containing numeric values and calculates the sum of all values.
Sample Input:
const nestedObj = {
a: 1,
b: 2,
c: { d: 3, e: { f: 4 } },
};
Sample Output: Sum: 10 */

function calculateSum(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
      sum += calculateSum(obj[key]);
    }
  }

  return sum;
}

const nestedObj = {
  a: 1,
  b: 2,
  c: { d: 3, e: { f: 4 } },
};

const totalSum = calculateSum(nestedObj);

console.log("Sum:", totalSum);



/* 10. Write a program that takes an object and counts the occurrences of each property

Sample Input: const obj = { name: &quot;John&quot;, age: 30, city: &quot;New York&quot;, profession: &quot;Engineer&quot; };
Sample Output: {
name: 1,
age: 1,
city: 1,
profession: 1,
}  */

function countPropertyOccurrences(obj) {
  const propertyCounts = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (propertyCounts[key]) {
        propertyCounts[key] += 1;
      } else {
        propertyCounts[key] = 1;
      }
    }
  }

  return propertyCounts;
}

const obj = { name: "John", age: 30, city: "New York", profession: "Engineer" };
const finalResult = countPropertyOccurrences(obj);

console.log(finalResult);

