// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function createBase(integer) {
  if (integer >= 0) {
    return function addNum(num) {
      return num + integer;
    };
  } else if (integer < 0) {
    return function subtractNum(num) {
      return num - Math.abs(integer);
    };
  }
};
