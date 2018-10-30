// Code your solution in this file
function findMatching(list, name){
  return list.filter(function (driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, letters){
  return list.filter(function(driverName){
    return driverName.slice(0, letters.length) === letters;
  });
}

function matchName(list, name){
  return list.filter(function(driverName){
      return driverName.name.toLowerCase() === name.toLowerCase();
  });
}
