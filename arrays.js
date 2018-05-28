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
  newEndArr = [ ...array, element]
  return newEndArr
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
