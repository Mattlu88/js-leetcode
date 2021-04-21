var romanToInt = function (s) {
  const map = new Map();
  map.set("I", 1);
  map.set("IV", 4);
  map.set("V", 5);
  map.set("IX", 9);
  map.set("X", 10);
  map.set("XL", 40);
  map.set("L", 50);
  map.set("XC", 90);
  map.set("C", 100);
  map.set("CD", 400);
  map.set("D", 500);
  map.set("CD", 400);
  map.set("CM", 900);
  map.set("M", 1000);

  let n = 0;
  for (let i = 0; i < s.length; i++) {
    let r = "";
    if (i < s.length - 1) {
      r = s.charAt(i).concat(s.charAt(i + 1));
      if (map.get(r) !== undefined) {
        n += map.get(r);
        i++;
      } else {
        r = s.charAt(i);
        n += map.get(r);
      }
    } else {
      r = s.charAt(i);
      n += map.get(r);
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
