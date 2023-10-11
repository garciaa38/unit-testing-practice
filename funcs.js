function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  // Your code here
  try {
    if (typeof number !== typeof(Number)) {
      throw new Error('Must be a number!')
    }
    if (number % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
}

function myRange(min, max, step = 1) {
  // Your code here
}


module.exports = { isFive, isOdd, myRange };
