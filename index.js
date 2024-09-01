// Implement a Function to Flatten a Nested Array:
// Question: Write a JavaScript function to flatten a deeply nested array.
// Examples:
// ● Input: [1, [2, [3, [4]], 5]]
// ○ Output: [1, 2, 3, 4, 5]
// ● Input: [[1, 2], [3, 4], [5]]
// ○ Output: [1, 2, 3, 4, 5]
// ● Input: [1, [2, 3], 4, [5, 6]]
// ○ Output: [1, 2, 3, 4, 5, 6]
// ● Input: [1, [[2, 3], [4, [5]]], 6]
// ○ Output: [1, 2, 3, 4, 5, 6]



function flattenArray(nestedArray) {
    return nestedArray.reduce((flatArray, currentElement) => {
        if (Array.isArray(currentElement)) {
            return flatArray.concat(flattenArray(currentElement));
        } else {
            return flatArray.concat([currentElement]);
        }
    }, []);
}
// console.log(flattenArray([1, [2, [3, [4]], 5]]));
// console.log(flattenArray([[1, 2], [3, 4], [5]]));
// console.log(flattenArray([1, [[2, 3], [4, [5]]], 6]));


// Find the First Non-Repeating Character:
// Question: Write a JavaScript function to find the first non-repeating character in a string.
// Examples:
// ● Input: "aabbccddeef"
// ○ Output: "f"
// ● Input: "abcabcde"
// ○ Output: "d"
// ● Input: "aabbc"
// ○ Output: "c"
// ● Input: "xxyyzz"
// ○ Output: "None"

function NonRepeating(str) {
    result = {};
    for (let i in str) {
        if (result[str[i]]) {
            result[str[i]]++;
        }
        else {
            result[str[i]] = 1;
        };
    }
    for (let char in result) {
        if (result[char]==1){
            return char;
        }
    }
    return 'None';
}
// console.log(NonRepeating("aaaaabbbbccddeeff"));


// Find the Longest Substring Without Repeating Characters:
// Question: Write a JavaScript function to find the length of the
// longest substring without repeating characters.
// Examples:
// ● Input: "abcabcbb"
// ○ Output: 3 (substring: "abc")
// ● Input: "bbbbb"
// ○ Output: 1 (substring: "b")
// ● Input: "pwwkew"
// ○ Output: 3 (substring: "wke")
// ● Input: "dvdf"
// ○ Output: 3 (substring: "vdf")

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndex = {};
  
    for (let i = 0; end < s.length; end++) {
      if (s[i] in charIndex) {
        start = Math.max(start, charIndex[s[i]] + 1);
      }
      charIndex[s[i]] = i;
      maxLength = Math.max(maxLength, i - start + 1);
    }
  
    return maxLength;
  }




// Find the Majority Element:
// Question: Write a JavaScript function to find the majority element in
// an array. The majority element is the element that appears more than
// n/2 times in an array of size n.
// Examples:
// ● Input: [3, 2, 3]
// ○ Output: 3
// ● Input: [2, 2, 1, 1, 1, 2, 2]
// ○ Output: 2
// ● Input: [1, 1, 2, 1, 3, 4, 1]
// ○ Output: 1
// ● Input: [5, 5, 5, 5, 1, 2, 3]
// ○ Output: 5


function Majority(str) {
    result = {};
    for (let i in str) {
        if (result[str[i]]) {
            result[str[i]]++;
        }
        else {
            result[str[i]] = 1;
        };
    }
    let maxCount = 0;
    let majorityElement;
    for (let char in result) {
      if (result[char] > maxCount) {
        maxCount = result[char];
        majorityElement = char;
      }
    }
    return majorityElement;}

console.log(Majority([3,2,3]));
console.log(Majority([2,2,1,1,1,2,2]));
console.log(Majority([1,1,2,1,3,4,1]));
console.log(Majority([5,5,5,5,1,2,3]));

