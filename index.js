// Code your solution in this file

function findMatching(drivers, name) {
  let newDrivers = drivers.filter(function (person) {return name.toUpperCase() === person.toUpperCase()});
  return newDrivers
}

function fuzzyMatch(drivers, letters) {
  let length = letters.length;
  let newDrivers = drivers.filter(function (person) {return letters === person.slice(0, length)});
  return newDrivers;
}


function matchName(drivers, name) {
  let newDrivers = drivers.filter(function (person) {return person.name === name});
  return newDrivers;
}
