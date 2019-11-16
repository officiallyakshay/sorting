function split(wholeArray) {
  const firstHalf = wholeArray.slice(0, wholeArray.length/2)
  const secondHalf = wholeArray.slice(wholeArray.length/2)
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  //[1,4, 5, 8], [2,3, 6, 7]
  let result = [];
  for(let i = 0; i < arr1.length; ++i) {
    for (let j = 0; j < arr2.length; ++j){
      if (arr1[i] > arr2[j]){
        result.push(arr2[j]);
        arr2.splice(0, 1);
      }
      else if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        arr1.splice(0, 1);
        result.push(arr2[j]);
      }
    }
  }

  return result;
}
