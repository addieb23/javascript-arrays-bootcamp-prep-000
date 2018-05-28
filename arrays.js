chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  newArr = [element, ...array]
  return newArr

}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
