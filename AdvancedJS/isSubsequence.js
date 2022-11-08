function isSubsequence(str1, str2) {
  const map2 = {};
  [...str2].forEach((e, i) => {
    if (map2[e] === undefined) {
      map2[e] = i;
    }
  });
  for (let i = 1; i < str1.length; i += 1) {
    if (map2[str1[i]] < map2[str1[i - 1]]) return false;
  }
  return true;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

module.exports = isSubsequence;
