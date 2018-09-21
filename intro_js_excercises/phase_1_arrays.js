Array.prototype.uniq = function() {
  let uniqArr = [];

  for (i = 0; i < this.length; i++) {
    if (uniqArr.indexOf(this[i]) === -1) {
      uniqArr.push(this[i]);
    }
  }

  return uniqArr;
}


Array.prototype.twoSum = function() {
  let resArr = []

  for (i = 0; i < (this.length - 1); i++) {
    for (j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        resArr.push([i, j]);
      }
    }
  }

  return resArr;
}

Array.prototype.transpose = function() {
  let transArr = [];

  for (i = 0; i < this[0].length; i++) {
    transArr.push([]);
  }

  for (i = 0; i < this.length; i++) {
    for (j = 0; j< this[i].length; j++) {
      transArr[j].push(this[i][j]);
    }
  }

  return transArr;
}
