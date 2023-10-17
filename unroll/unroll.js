function unroll(squareArray) {
  const result = [];

  while (squareArray.length > 0) {
    result.push(...squareArray.shift());

    for (const row of squareArray) {
      if (row.length > 0) {
        result.push(row.pop());
      }
    }

    if (squareArray.length > 0) {
      result.push(...squareArray.pop().reverse());
    }

    for (let i = squareArray.length - 1; i >= 0; i--) {
      if (squareArray[i].length > 0) {
        result.push(squareArray[i].shift());
      }
    }
  }
  return result;
}

module.exports = unroll;
