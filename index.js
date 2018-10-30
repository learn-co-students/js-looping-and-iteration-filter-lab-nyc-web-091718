// Code your solution in this file
function findMatching (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.toUpperCase() === string.toUpperCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    return driver[0] + driver[1] === string;
  });
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  });
}
