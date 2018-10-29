// Code your solution in this file
function findMatching(array, name){
  return array.filter(function (arrayname) {return arrayname.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(array, partialname){
  return array.filter(function (arrayname) {return arrayname.slice(0,partialname.length).toLowerCase() === partialname.toLowerCase()})
}

function matchName(array, name) {
  return array.filter(function (person) {return person.name === name})
}
