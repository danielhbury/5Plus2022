function countUniqueValues(arr) {
  const newArr = [...arr];
  let j = 0;
  if (newArr.length === 0) return j;
  for (let i = 1; i < newArr.length; i += 1) {
    if (newArr[i] !== newArr[j]) {
      j += 1;
      newArr[j] = newArr[i];
    }
  }
  return j + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

module.exports = countUniqueValues;
