Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};


Array.prototype.myMap = function(callback) {
  let resArr = [];

  for (let i = 0; i < this.length; i++) {
    resArr.push(callback(this[i]));
  }

  return resArr;
};


Array.prototype.myReduce = function(callback, initialValue) {
  let arr = this;

  if (!initialValue) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  let result = initialValue

  arr.myEach(el => result = callback(result, el));

  return result;
};
