function fibs(num) {
  if (num < 0) {
    return console.log("Nope. too low.");
  }
  let arr = [];
  let fNum = 0;
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1 || i == 2) {
      arr.push(1);
    } else {
      fNum = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(fNum);
    }
  }

  return arr;
}

function fibsRec(num) {
  if (num < 0) {
    return console.log("Nope. too low.");
  } else if (num === 0) {
    return arr;
  }
  console.log("This was printed recursively");

  let arr = [];
  if (num === 1) {
    return arr.push(0);
  } else if (num === 2) {
    arr.push(0);
    arr.push(1);
    return arr;
  } else {
    let tArr = fibsRec(num - 1);
    arr = arr.concat(tArr);
    let tNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(tNum);
    return arr;
  }
}

console.log(fibsRec(8));
