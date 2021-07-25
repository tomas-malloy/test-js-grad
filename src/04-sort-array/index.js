/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function sortArray(arr) {
  if (arr instanceof Array !== true) {
    throw new TypeError('ERROR: Not an array!');
  } else if (arr instanceof Array) {
    if (arr.length == 0) {
      return [];
    }
    arr.forEach(element => {
      if (Number.isInteger(element) !== true) {
        throw new TypeError(
          'ERROR: One or more elements in the array are not integers!',
        );
      }
    });
    return arr.sort((a, b) => a - b);
  }
};
