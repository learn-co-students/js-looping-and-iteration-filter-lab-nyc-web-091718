// Code your solution in this file
function findMatching(drivers,name){
  let matchDrivers = drivers.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase()});
  return matchDrivers;
}

function fuzzyMatch(drivers,search){
  let matchDrivers = drivers.filter(function (driver) {return driver.startsWith(search)});
  return matchDrivers;
}

function matchName(drivers, name){
  let matchDrivers = drivers.filter(function (driver) {return driver.name === name});
  return matchDrivers;
}
