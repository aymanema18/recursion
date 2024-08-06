function mergeSort(arr) {
  console.log("This was printed recursively");

  if (arr.length <= 0) {
    return console.log("there is nothing to sort.");
  }

  if (arr.length > 1) {
    let mid = Math.trunc(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let lArray = mergeSort(left);
    let rArray = mergeSort(right);

    return merge(lArray, rArray);
  }
  return arr;
}

function merge(lA, rA) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < lA.length && j < rA.length) {
    if (lA[i] < rA[j]) {
      arr.push(lA[i]);
      i++;
    } else if (lA[i] > rA[j]) {
      arr.push(rA[j]);
      j++;
    } else if (lA[i] === rA[j]) {
      arr.push(lA[i]);
      arr.push(rA[j]);
      i++;
      j++;
    }
  }
  for (i; i < lA.length; i++) {
    arr.push(lA[i]);
  }

  for (j; j < rA.length; j++) {
    arr.push(rA[j]);
  }

  return arr;
}

console.log(mergeSort([0, 1, 1, 2, 3, 5, 8, 13]));
