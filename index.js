function findMatching(drivers, name) {
  let matchedDrivers = drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
  return matchedDrivers;
}

function fuzzyMatch(drivers, letters) {
  let lengthOfLetters = letters.length;
  let matchedDrivers = drivers.filter(function (driver) {
    return driver.slice(0, lengthOfLetters) === letters
  });
  return matchedDrivers;
}

function matchName(drivers, name) {
  let matchedDrivers = drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
  return matchedDrivers
}
