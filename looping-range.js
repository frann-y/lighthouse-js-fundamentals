function range(start, end, step) {
  var arr = [];
  if ((start || end || step) === undefined || (start > end) || (step < 0) ) {
    return arr;
  } else {
    for (start; start <= end; start += step) {
      arr.push(start);
    }
    return arr;
  }
}