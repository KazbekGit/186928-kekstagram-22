/* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomIntInclusive(min, max) {
  if (min < 0) min = 0;
  if (max < 0) max = 0;
  if(min > max) {
    let temp = min;
    min = max;
    max = temp;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let checkStringLength = function(userString, maxLength){
  if (userString.length > maxLength) return false;
  return true;
}

getRandomIntInclusive(100, 50);
checkStringLength('JScript', 5);

