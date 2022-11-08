function minSubArrayLen(arr, num) {
  let max = 0;
  let highest = 0;
  let highestIdx = 0;
  for (let i = 0; i < arr.length; i += 1) {
    max += arr[i];
    if (arr[i] > highest) {
      highest = arr[i];
      highestIdx = i;
    }
  }
  if (num > max) return 0;
  if (highest > num) return 1;
  let top = highestIdx + 1;
  let bottom = highestIdx - 1;
  let tempSum = highest;
  while (tempSum < num) {
    const topSum = arr[top] ? tempSum + arr[top] : 0;
    const bottomSum = arr[bottom] ? tempSum + arr[bottom] : 0;
    if (topSum > bottomSum) {
      tempSum = topSum;
      top += 1;
    } else {
      tempSum = bottomSum;
      bottom -= 1;
    }
  }
  return top - bottom - 1;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

module.exports = minSubArrayLen;
