
function filterRange(arr, a, b) {
  let rangeFiltered = arr.filter(function(number) {
    return number >= a && number <= b;
  });

  return rangeFiltered;
}

