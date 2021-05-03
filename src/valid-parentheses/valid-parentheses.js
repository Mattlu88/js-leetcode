/**
 * @param {string} s
 * @return {boolean}
 */

/* 
  the first closed bracket should always has a open bracket just one position before it 
*/

var isValid = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    switch (c) {
      case "(":
        arr.push(")");
        break;
      case "[":
        arr.push("]");
        break;
      case "{":
        arr.push("}");
        break;
      default:
        if (arr.pop() !== c) return false;
    }
  }
  return arr.length === 0;
};

console.log(isValid("("));
console.log(isValid(")"));
console.log(isValid("()"));
console.log(isValid("()[]"));
console.log(isValid("{()[]}"));
console.log(isValid("{()[]}("));
