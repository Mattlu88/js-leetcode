/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanList = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  const validation = (num) => {
    if (num > 3999 || num < 1) {
      throw new RangeError("The integer must be between 1 and 3999.");
    }
  };

  try {
    validation(num);
    let value = num;
    let romanStr = "";
    let i = 0;
    while (value > 0) {
      if (value - values[i] >= 0) {
        romanStr = romanStr.concat(romanList[i]);
        value -= values[i];
      } else {
        i++;
      }
    }
    return romanStr;
  } catch (error) {
    if (error instanceof RangeError) {
      return error.message;
    }
  }
};

console.log(intToRoman(4000)); //Error
console.log(intToRoman(1234)); // MCCXXXIV
console.log(intToRoman(1994)); //MCMXCIV
console.log(intToRoman(58)); //LVIII
console.log(intToRoman(4)); //IV
console.log(intToRoman(3)); //III
