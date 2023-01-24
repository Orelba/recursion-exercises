// Here I will solve the coding questions from the following link:
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Question 1: Sum all numbers
function sumRange(n) {
  if (n == 1) return n
  return n + sumRange(n - 1)
}

// console.log('sumRange:', sumRange(3))

// Question 2: Power function
function power(n, x) {
  if (x == 0) return 1
  return n * power(n, x - 1)
}

// console.log('power:', power(2, 4))

// Question 3: Calculate factorial
function factorial(n) {
  if (n == 1) return n
  return n * factorial(n - 1)
}

// console.log('factorial:', factorial(5))

// Question 4: Check all values in an array
function all(array, callback) {
  var copy = copy || array.slice()

  if (copy.length === 0) return true

  if (callback(copy[0])) {
    copy.shift()
    return all(copy, callback)
  } else {
    return false
  }
}

const allAreLessThanSeven = all([1, 2, 6], function (num) {
  return num < 7
})

// console.log('all:', allAreLessThanSeven)

// Question 5: Product of an array
function productOfArray(array) {
  if (array.length === 0) return 1
  return array.shift() * productOfArray(array)
}

// console.log('productOfArray:', productOfArray([1, 2, 3, 10]))

// Question 6: Search JS object
function contains(obj, val) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return contains(obj[key], val)
    }
    if (obj[key] === val) return true
  }
  return false
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
}

// console.log(contains(nestedObject, 44))

// Question 7: Parse a multi-dimensional array
function totalIntegers(array) {
  if (array.length === 0) return 0

  let total = 0
  let first = array.shift()

  if (Array.isArray(first)) {
    total += totalIntegers(first)
  } else if (Number.isInteger(first)) {
    total += 1
  }

  return total + totalIntegers(array)
}

const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])
// console.log('totalIntegers:', seven)

// Question 8: Write a function that sums squares of numbers in list that may contain more lists
function sumSquares(array) {
  total = 0

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += sumSquares(array[i])
    } else {
      total += array[i] * array[i]
    }
  }
  return total
}

const list = [10, [[10], 10], [10]]
// console.log('sumSquares:', sumSquares(list))

// Question 9: The function should return an array containing repetitions of the number argument.
// For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
function replicate(times, num) {
  if (times <= 0) return []
  return [num].concat(replicate(times - 1, num))
}

// console.log('replicate:', replicate(7, 5))


// Bonus: Collatz conjecture (not in exercises)
function collatz(n) {
  sum = 0
  if (n == 1) return 0
  else if (n % 2 == 0) return 1 + collatz(n / 2)
  else return 1 + collatz(3 * n + 1)
}

// console.log(collatz(7))
