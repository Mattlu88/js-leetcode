/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  let map = new Map();
  for (i = 0; i < nums.length; i++) {
    let a = nums[i];
    let b = target - nums[i];
    if (map.get(b) !== undefined) {
      return [i, map.get(b)];
    } else {
      map.set(a, i);
    }
  }
};
