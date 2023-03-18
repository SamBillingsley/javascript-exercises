const removeFromArray = function (arr, ...element) {
  items = element.sort();
  newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (items.includes(arr[i])) {
      continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
