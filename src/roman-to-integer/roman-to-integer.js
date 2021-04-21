/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = map.get(s[i]);
    const next = map.get(s[i + 1]) === undefined ? 0 : map.get(s[i + 1]);
    if (curr < next) {
      n -= curr;
    } else {
      n += curr;
    }
  }
  return n;
};

let s;
s = "III"; //3
console.log(romanToInt(s));

s = "IV"; //4
console.log(romanToInt(s));

s = "IX"; //9
console.log(romanToInt(s));

s = "LVIII"; //58
console.log(romanToInt(s));

s = "MCMXCIV"; //1994
console.log(romanToInt(s));
