// Code your solution in this file
function findMatching(collection, driver) {
  return collection.filter(function (driverName) {
    return driverName.toLowerCase() === driver.toLowerCase()
  })
}

function fuzzyMatch(collection, drivers) {
  let driversLength = drivers.length;
  return collection.filter(function (driverName) {
    return driverName.slice(0, driversLength) === drivers;
  });
}

function matchName(collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
