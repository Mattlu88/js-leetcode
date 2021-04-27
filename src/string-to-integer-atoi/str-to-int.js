/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let str = s.trimStart();
  if (str.length === 0) return 0;

  const re = /^[+-]?\d+/;
  const match = str.match(re);
  if (match === null) return 0;

  let num = Number(match[0]);
  if (num > Math.pow(2, 31) - 1) num = Math.pow(2, 31) - 1;
  if (num < Math.pow(2, 31) * -1) num = Math.pow(2, 31) * -1;

  return num;
};

console.log(myAtoi("42")); //42
console.log(myAtoi("    -42")); //-42
console.log(myAtoi("4193 with words")); //4193
console.log(myAtoi("words and 987")); //0
console.log(myAtoi("-91283472332")); //-2147483648
console.log(myAtoi("-+12")); //0
