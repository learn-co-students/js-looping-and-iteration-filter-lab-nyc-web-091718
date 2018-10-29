// // Code your solution in this file
// function findMatching(drivers, string){
//   const matchdriver = []
//   for (const i of drivers){
//     if (i.toUpperCase() == string.toUpperCase()){
//       matchdriver.push(i)
//     }
//   }
//   return matchdriver
// }

function findMatching(drivers, string){
  return drivers.filter(function (name) { return name.toUpperCase() === string.toUpperCase(); });
}

function fuzzyMatch(drivers, string){
  const lengthofstring = string.length
  return drivers.filter(function (name) { return name.slice(0, lengthofstring).toUpperCase() === string.toUpperCase(); });
}


//
// function fuzzyMatch(drivers, string1){
//   const matchdriver = []
//   for (const driver of drivers){
//     console.log(driver)
//     const lengthofstring = string1.length
//     console.log("left", driver.slice(0, lengthofstring).toUpperCase())
//     console.log("right", string1.toUpperCase())
//     if (driver.slice(0, lengthofstring).toUpperCase() === string1.toUpperCase()){
//       console.log("adding driver to array", driver)
//       matchdriver.push(driver)
//     }
//   }
//   return matchdriver
// }
function matchName(drivers, string){
  return drivers.filter(function (driver) { return driver.name.toUpperCase() === string.toUpperCase(); });

  }
