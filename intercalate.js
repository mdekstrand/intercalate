function intercalate(arr, sep, final, pair) {
  if (arr.length < 2) {
    return arr.slice();
  } else if (arr.length && pair !== undefined) {
    let [e1, e2] = arr;
    return [e1, pair, e2];
  } else {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (final && i == arr.length - 1) {
        res.push(final)
      } else if (i > 0) {
        res.push(sep)
      }
      res.push(arr[i]);
    }
    return res;
  }
}

module.exports = intercalate;