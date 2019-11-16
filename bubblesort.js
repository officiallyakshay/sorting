const bubbleSort = (arr)=> {
  let first = arr[0];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    //[3, 1, 2, 4]
    //[1, ]
    if (arr[i] > arr[i + 1]) {
      result.push(arr[i + 1])
    }
    else {
      result.push(arr[i]);
    }
  }
  return result;
}

