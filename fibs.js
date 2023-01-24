function fibs(n) {
  arr = []

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) arr.push(i)
    else arr.push(arr[i - 1] + arr[i - 2])
  }

  return arr
}

function fibsRec(n) {
  if (n == 0) return [0]
  if (n == 1) return [0, 1]

  const arr = fibsRec(n - 1)
  return [...arr, arr[n - 1] + arr[n - 2]]
}