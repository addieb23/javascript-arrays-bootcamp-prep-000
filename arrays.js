chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  newArr = [element, ...array]
  return newArr

}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  newArr = [ ...array, element]
  return newArr
}

function destructivelyAddElementToEndOfArray(array element){
  array.push(element)
  return array
}
