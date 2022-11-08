function areThereDuplicates(...rest) {
  const map = {};
  [...rest].forEach((e) => {
    if (map[e]) {
      map[e] += 1;
    } else {
      map[e] = 1;
    }
  });
  return !Object.keys(map).every((e) => map[e] === 1);
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

module.exports = areThereDuplicates;
