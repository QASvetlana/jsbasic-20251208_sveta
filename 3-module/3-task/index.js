function camelize(str) {
let strFixed = str.split('-');
for (let i = 1; i < strFixed.length; i++) { 
  let word = strFixed[i]; 
word = word.charAt(0).toUpperCase() + word.substring(1);
 strFixed[i] = word;
}
return strFixed.join('');
}
