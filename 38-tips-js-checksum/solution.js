const data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

// i need to figure out how to find the smallest val in the array
// i need to figure out how to find the largest val in the array
// i need to calculate the difference between the largest and smallest vals in the array
// i need to keep a running total of the differences between these elements
// i need to return the sum of all differences between these elements

/****************************** WITH ARRAY.PROTOTYPE.REDUCE ***********************************************/
// more verbose
const reduceChecksumLong = nestedData => {
  return nestedData.reduce((sum, innerArr) => {
    // const max = Math.max.apply(null, innerArr)
    const max = Math.max(...innerArr)
    // const min = Math.min.apply(null, innerArr)
    const min = Math.min(...innerArr)
    const difference = max - min
    sum += difference
    return sum
  }, 0)
}

console.log(reduceChecksumLong(data))

// more concise
const reduceChecksumShort = nestedData => {
  return nestedData.reduce((sum, innerArr) => {
    return (sum += Math.max(...innerArr) - Math.min(...innerArr))
  }, 0)
}

console.log(reduceChecksumShort(data))

/****************************** WITH ARRAY.PROTOTYPE.REDUCE ***********************************************/

const calculateArrDiff = (sum, arr) => (sum += Math.max(...arr) - Math.min(...arr))

const reduceChecksumRefactor = nestedData => nestedData.reduce(calculateArrDiff, 0)

console.log(reduceChecksumRefactor(data))

/******************************* FUNCTIONAL APPROACH ******************************************************/

// sort arr
const sortArr = arr => arr.sort((a, b) => a - b)
// find largest val from sorted arr
const findMaxFromSortedArr = arr => sortArr(arr)[arr.length - 1]
// find smallest val from sorted arr
const findMinFromSortedArr = arr => sortArr(arr)[0]

const calculateMaxMinFromArr = arr => findMaxFromSortedArr(arr) - findMinFromSortedArr(arr)

const checksumFunctionalForEach = nestedData => {
  let total = 0
  nestedData.forEach(innerArr => {
    const largest = findMaxFromSortedArr(innerArr)
    const smallest = findMinFromSortedArr(innerArr)
    const difference = largest - smallest
    total += difference
  })
  return total
}

console.log(checksumFunctionalForEach(data))

const checksumFunctionalReduce = nestedData => {
  return nestedData.reduce((sum, innerArr) => {
    return (sum += findMaxFromSortedArr(innerArr) - findMinFromSortedArr(innerArr))
  }, 0)
}

console.log(checksumFunctionalReduce(data))

/************************* NESTED LOOP/ BRUTE FORCE APPROACH *********************************************/

// note: this approach will be slower than the others, closer to an On^2 time complexity

const nestedLoopChecksum = nestedData => {
  let sum = 0
  for (let i = 0; i < nestedData.length; i++) {
    const currentArray = nestedData[i]
    let min = currentArray[0]
    let max = currentArray[0]
    for (let j = 0; j < currentArray.length; j++) {
      // find the largest and smallest vals in the array
      if (currentArray[j] > max) max = currentArray[j]
      if (currentArray[j] < min) min = currentArray[j]
    }
    sum += max - min
  }
  return sum
}

console.log(nestedLoopChecksum(data))

/************************** MAP SORT/ BRUTE FORCE APPROACH **********************************************/

const mapSortChecksum = nestedData => {
  const sortedData = nestedData.map(innerArr => {
    return innerArr.sort((curr, next) => curr - next)
  })
  return sortedData.reduce((sum, innerArr) => {
    return (sum += innerArr[innerArr.length - 1] - innerArr[0])
  }, 0)
}

console.log(mapSortChecksum(data))

const mapSortChecksumImpossibleToReadOneLine = nestedData =>
  nestedData
    .map(innerArr => innerArr.sort((curr, next) => curr - next))
    .reduce((sum, innerArr) => (sum += innerArr[innerArr.length - 1] - innerArr[0]), 0)

console.log(mapSortChecksumImpossibleToReadOneLine(data))
