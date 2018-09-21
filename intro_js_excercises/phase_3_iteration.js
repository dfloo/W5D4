Array.prototype.bubbleSort = function () {
  let sortedArr = this;
  let swapped = true;
  let x = 0;

  while (swapped) {
    swapped = false;
    for (i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        x = sortedArr[i + 1];
        sortedArr[i + 1] = sortedArr[i];
        sortedArr[i] = x;
        swapped = true;
      }
    }
  }
  return sortedArr;
};

String.prototype.substrings = function() {
  let resArr = [];

  for (i = 0; i < this.length -1; i++) {
    for (j = i + 1; j < this.length; j++) {
      resArr.push(this.slice(i, j));
    }
  }

  return resArr;
}
