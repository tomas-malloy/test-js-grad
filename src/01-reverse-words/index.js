/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function reverseWordsInSentence(input) {
  return input
    .split(' ')
    .map(x => x.split('').reverse().join(''))
    .join(' ');
};
