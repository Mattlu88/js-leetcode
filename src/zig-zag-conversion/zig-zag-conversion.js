var convert = function (s, numRows) {
  let map = new Map();
  const saveToMap = (key, value) => {
    const str = map.get(key) ? map.get(key) : "";
    map.set(key, str.concat(value));
  };

  if (numRows === 1) return s;

  let r = 0;
  let incFlag = true;
  for (let i = 0; i < s.length; i++) {
    if (numRows === 2) {
      if (r < numRows) {
        saveToMap(r, s.charAt(i));
        r++;
      } else {
        r = 0;
        saveToMap(r, s.charAt(i));
        r++;
      }
      continue;
    }

    if (r === numRows && incFlag) {
      r--;
      incFlag = false;
    }

    if (r === 0 && !incFlag) {
      incFlag = true;
    }

    if (incFlag) {
      if (r < numRows) {
        saveToMap(r, s.charAt(i));
        r++;
      }
    } else {
      if (r === numRows - 1) {
        r--;
      }
      saveToMap(r, s.charAt(i));
      r--;
    }
  }

  let result = "";
  for (let value of map.values()) {
    result = result.concat(value);
  }
  console.log(result);
  return result;
};

let s = "PAYPALISHIRING";
convert("ABC", 2);
convert(s, 2);
convert(s, 3);
convert(s, 4);
