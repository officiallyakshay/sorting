function split(wholeArray) {
  const firstHalf = wholeArray.slice(0, wholeArray.length/2)
  const secondHalf = wholeArray.slice(wholeArray.length/2)
  return [firstHalf, secondHalf];
}