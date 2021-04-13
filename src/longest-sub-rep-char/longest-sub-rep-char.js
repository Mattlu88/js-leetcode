/**
 * @param {string} s
 * @return {number}
 */

/*
  pointer i to scan the string
  pointer j is pointing the position that is the start position to count the length
*/

var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let map = new Map();
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    let currChar = s.charAt(i);
    if (map.has(currChar)) {
      j = Math.max(j, map.get(currChar) + 1);
    }
    map.set(currChar, i);
    maxLength = Math.max(maxLength, i - j + 1);
  }

  return maxLength;
};

const s1 = "abcabcbb";
const s2 = "dvdf";

console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
