// Code your solution in this file

function findMatching(collection,name)
{
  return collection.filter(function(value)
  {
    return name.toUpperCase() === value.toUpperCase()
  });
}

function fuzzyMatch(collection, letters)
{
  return collection.filter(function(value)
  {
        return value.toUpperCase().slice(0,letters.length) === letters.toUpperCase();
  });
}

function matchName(collection, name)
{
  return collection.filter(function(value)
  {
    return value.name.toUpperCase() === name.toUpperCase();
  })
}
