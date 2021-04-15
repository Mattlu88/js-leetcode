/**
 * @param {number} x
 * @return {boolean}
 */

/* Reverse Int and compare reversed int and origin int */
var isPalindrome = function (x) {
  if (x < 0) return false;

  if (x !== 0 && x % 10 === 0) return false;

  let rev = 0;

  let n = x;
  while (n > rev) {
    rev = rev * 10 + (n % 10);
    n = parseInt(n / 10, 10);
  }

  console.log(rev);
  return rev === n || parseInt(rev / 10, 10) === n;
};

/* Convert to array and compare the first element and the last element */

var isPalindrome = function (x) {
  const arr = x.toString().spilt();

  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) {
      return false;
    }
  }

  return true;
};
