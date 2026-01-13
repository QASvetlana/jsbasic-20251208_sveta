function getMinMax(str) { 
  let arr = str.split(' '); 
  let numbers = arr
    .filter(item => !isNaN(parseFloat(item)))
    .map(item => parseFloat(item)); 
  
  let max = Math.max(...numbers); 
  let min = Math.min(...numbers);
  
  return { min: min, max: max };
}







