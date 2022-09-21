const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1]

function sortNumber(numbers) {
  for(let i=numbers.length; i > 1; i--) {
    for(let j=0; j < i; j++) {
      let temp
      
      if (numbers[j] > numbers[j+1]) {
        temp = numbers[j]
        numbers[j] = numbers[j+1]
        numbers[j+1] = temp
      }
    }
  }
  return numbers
}

function checkMissingNumbers(numbers) {
  const sortedNumbers = sortNumber(numbers)

  for(let i=0; i < sortedNumbers.length; i++) {
    const lastNumber = sortedNumbers.length - 1

    if (i !== lastNumber) {
      if (sortedNumbers[i] + 1 !== sortedNumbers[i + 1]) {
        return sortedNumbers[i] + 1
      } 
    }
  }
  return 'No missing number'
}

const missingNumber = checkMissingNumbers(numbers)
console.log(missingNumber)