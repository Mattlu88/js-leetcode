/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let j = height.length - 1;
  let most = 0;
  for (let i = 0; i < height.length; i++) {
    while (height[j] < height[i]) {
      const s = Math.min(height[j]) * (j - i);
      most = Math.max(most, s);
      j--;
      if (j === i + 1) break;
    }
    const s = Math.min(height[i], height[j]) * (j - i);
    most = Math.max(most, s);
  }
  return most;
};

const s1 = [1, 1];
console.log(maxArea(s1)); //1

const s2 = [1, 2, 1];
console.log(maxArea(s2)); //2

const s3 = [4, 3, 2, 1, 4];
console.log(maxArea(s3)); //16

const s4 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(s4)); //49

const s5 = [0, 2];
console.log(maxArea(s5)); //0

const s6 = [2, 3, 4, 5, 18, 17, 6];
console.log(maxArea(s6)); //17

const s7 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(maxArea(s7)); //25
