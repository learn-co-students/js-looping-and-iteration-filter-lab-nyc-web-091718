// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters) {
  let nameBeg = letters.length;
  return drivers.filter (function (driver) {
    return driver.slice(0, nameBeg) === letters;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
