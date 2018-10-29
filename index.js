// Code your solution in this file

function findMatching (drivers, string) {
  return drivers.filter(function (driverString) {
    return driverString.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch (drivers, string) {
  let length = string.length;
  return drivers.filter(function (driverString) {
    return driverString.slice(0, length) === string;
  });
}

function matchName (drivers, string) {
  return drivers.filter(function (drivers) {
    return drivers.name.toLowerCase() === string.toLowerCase();
  });
}
