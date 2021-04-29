/**
 * @param {number[]} height
 * @return {number}
 */

/*
  The Water container is decided by the width and the shortest height of two sides;
  Start from the widest container which left side is at first position and right side is at the last position;

  if left side is shorter, all other containers which has the same left side will be smaller than the current water container.
  because current Water container got the widest width with the current left side;
  In this case, we only need to move left side forward to right and get new Water container.

  Same as right side. If right side is shorter, we move left side forward to right and get new water container.
*/

var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let water = 0;
  while (i < j) {
    const w = j - i;
    const h = Math.min(height[i], height[j]);
    water = Math.max(water, w * h);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return water;
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
