function incrementInMap(map) {
  return (char) => {
    const mapRef = map;
    if (!map[char]) {
      mapRef[char] = 1;
    } else {
      mapRef[char] += 1;
    }
  };
}

module.exports = () => ({
  incrementInMap,
});
