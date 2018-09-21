function range(start, end) {
  if (start === end) { return [start] }

  return [start].concat(range(start + 1, end));
};

function sumRec(arr) {
  if (arr.length === 1) { return arr[0] }

  return arr[0] + sumRec(arr.slice(1));
};

function exponent(base, exp) {
  if (exp === 0) { return 1 }

  return base * exponent(base, exp -1)
};


function exponentWat(base, exp) {
  if (exp === 0) { return 1 }
  else if (exp === 1) { return base }

  if (base % 2 === 0) { return exponentWat(base, exp/2) ** 2 }
  if (base % 2 === 1) { return base * (exponentWat(base, (exp-1)/2) ** 2) }
}

function fibonacci(n) {
  if (n === 0) { return [] }
  if (n === 1) { return [0] }
  if (n === 2) { return [0, 1] }

  let fibArr = fibonacci(n - 1);

  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);

  return fibArr;
}

// this function crashed my computer
// function deepDup(arr) {
//   let dupArr = [];
//
//   for (i = 0; i < arr.length - 1; i ++) {
//     if (Array.isArray(arr[i])) {
//       dupArr.push(deepDup(arr[i]));
//     }
//     dupArr.push(arr[i]);
//   }
//
//   return dupArr;
// }


function bsearch(arr, target) {
  const mid = Math.floor(arr.length / 2)

  if (arr[mid] === target) { return mid }

  if (arr[mid] > target) { return bsearch(arr.slice(0, mid), target) }

  if (arr[mid] < target) { return bsearch(arr.slice(mid + 1), target) + mid + 1 }
}
