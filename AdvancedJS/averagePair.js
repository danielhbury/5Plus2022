function averagePair(arr, avg) {
  if (arr.length < 2) return false;
  let i = 0;
  let j = arr.length - 1;
  while (j > i) {
    const pairAvg = (arr[i] + arr[j]) / 2;
    if (pairAvg === avg) return true;
    if (pairAvg < avg) i += 1;
    if (pairAvg > avg) j -= 1;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

module.exports = averagePair;
