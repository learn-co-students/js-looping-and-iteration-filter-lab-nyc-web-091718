// Code your solution in this file
function findMatching(array, pName) {
  return array.filter(function(name){return name.toLowerCase() === pName.toLowerCase()});
}

function fuzzyMatch(array, pName) {
  return array.filter(
    function(name) {
      return name.toLowerCase().startsWith(pName.toLowerCase())
    }
  );
}

function matchName(array, pName) {
  return array.filter(
    function(element) {
        return element.name.toLowerCase() === pName.toLowerCase()
    });
}
