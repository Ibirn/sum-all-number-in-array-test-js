function sumItems(array) {
  let sum = 0;
  array.forEach(elem => {
    if(Array.isArray(elem)){
      sum += sumItems(elem)
    } else {
      sum += elem
    }
  });
  return sum
}


//console.log(sumItems([1,2,[4, [5]], 7, 8]))
module.exports = sumItems;