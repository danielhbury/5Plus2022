function sameFrequency(num1, num2) {
  const map1 = {};
  const map2 = {};

  let areEqual = true;
  const incrementInMap = (map) => (char) => {
    const mapRef = map;
    if (!map[char]) {
      mapRef[char] = 1;
    } else {
      mapRef[char] += 1;
    }
  };
  [...num1.toString()].forEach(incrementInMap(map1));
  [...num2.toString()].forEach(incrementInMap(map2));

  Object.keys(map1).every((e) => {
    if (map1[e] !== map2[e]) {
      areEqual = false;
      return false;
    }
    return true;
  });

  return areEqual;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

module.exports = sameFrequency;
