function validAnagram(str1, str2) {
  const map1 = {};
  const map2 = {};
  if (str1.length !== str2.length) return false;
  const incrementInMap = (map) => (char) => {
    const mapRef = map;
    if (!map[char]) {
      mapRef[char] = 1;
    } else {
      mapRef[char] += 1;
    }
  };
  [...str1].forEach(incrementInMap(map1));
  [...str2].forEach(incrementInMap(map2));

  const keys = Object.keys(map1);
  for (let i = 0; i < keys.length; i += 1) {
    if (map2[keys[i]] !== map1[keys[i]]) return false;
  }
  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false)) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

module.exports = validAnagram;
