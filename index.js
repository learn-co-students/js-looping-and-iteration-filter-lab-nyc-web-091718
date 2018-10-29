  function findMatching(drivers, string) {
    return drivers.filter(function (driver) {if (driver.toLowerCase() === string.toLowerCase()) {return driver}});
  }



function fuzzyMatch(drivers, string){
  return drivers.filter(function (driver) {if (driver.toLowerCase().slice(0, string.length) === string.toLowerCase()) {return driver}});
}

function matchName(drivers, string){
  return drivers.filter(function (driver) {if (driver.name.toLowerCase() === string.toLowerCase()) {return driver}});
}
