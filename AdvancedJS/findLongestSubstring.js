function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let map = {};
  let length = 0;
  for (let i = 0; i < str.length;) {
    if (map[str[i]] === undefined) {
      map[str[i]] = i;
      i += 1;
    } else {
      length = Math.max(Object.keys(map).length, length);
      i = map[str[i]] + 1;
      map = {};
    }
  }
  length = Math.max(Object.keys(map).length, length);
  return length;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6

module.exports = findLongestSubstring;
