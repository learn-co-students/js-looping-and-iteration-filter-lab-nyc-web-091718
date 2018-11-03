// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// Code your solution in this file

function findMatching (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.toUpperCase() === string.toUpperCase();
  });
}
//
// function fuzzyMatch(drivers, string) {
//   return drivers.filter(function (driver) {
//     return driver[0] + driver[1] === string;
//   });
// }

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.slice(0, string.length) === string;
  });
}
//
function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  });
}
