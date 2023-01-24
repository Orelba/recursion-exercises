function merge(leftArr, rightArr) {
  const merged = []

  while (leftArr.length > 0 && rightArr.length > 0) {
    const arrWithLowerFirstNumber = leftArr[0] < rightArr[0] ? leftArr : rightArr
    const numberToMerge = arrWithLowerFirstNumber.shift()
    merged.push(numberToMerge)
  }

  return merged.concat(leftArr, rightArr)
}

function mergeSort(arr) {
  if (arr.length < 2) return arr
  
  const mid = arr.length / 2
  let leftSide = arr.slice(0, mid)
  let rightSide = arr.slice(mid)

  leftSide = mergeSort(leftSide)
  rightSide = mergeSort(rightSide)
  return merge(leftSide, rightSide)
}