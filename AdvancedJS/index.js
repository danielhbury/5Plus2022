const areThereDuplicates = require('./areThereDuplicates');
const averagePair = require('./averagePair');
const countUniqueValues = require('./countUniqueValues');
const findLongestSubstring = require('./findLongestSubstring');
const isSubsequence = require('./isSubsequence');
const maxSubarraySum = require('./maxSubarraySum');
const minSubArrayLen = require('./minSubArrayLen');
const sameFrequency = require('./sameFrequency').default;
const validAnagram = require('./validAnagram');

module.exports = () => ({
  areThereDuplicates,
  averagePair,
  countUniqueValues,
  findLongestSubstring,
  isSubsequence,
  maxSubarraySum,
  minSubArrayLen,
  sameFrequency,
  validAnagram,
});
