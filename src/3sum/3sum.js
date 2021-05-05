/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let arr = [...nums].sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        j++;
        continue;
      }

      if (k < arr.length - 1 && arr[k] === arr[k + 1]) {
        k--;
        continue;
      }

      const sum = arr[i] + arr[j] + arr[k];
      if (sum === 0) {
        result.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  console.log(result);
  return result;
};

let arr1 = [-1, -2, 0, 2, 1];
threeSum(arr1);
let arr2 = [-1, 0, 1, 2, -1, -4];
threeSum(arr2);
let arr3 = [0];
threeSum(arr3);
let arr4 = [0];
threeSum(arr4);
let arr5 = [0, 0, 0, 0];
threeSum(arr5);
let arr6 = [0, 1, 1];
threeSum(arr6);
