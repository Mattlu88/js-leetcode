/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  const reversedStr = Math.abs(x).toString().split("").reverse().join("");

  const reversedNum = reversedStr * Math.sign(x);

  if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < Math.pow(-2, 31)) {
    return 0;
  }

  return reversedNum;
};
