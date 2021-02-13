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

let ARRAY_LENGTH = 25;
let INITIAL_VALUE = 1;
let END_VALUE = 25;

getRandomIntInclusive(100, 50);
checkStringLength('JScript', 5);

let usedValues = [];
let getUniqueValue = function(){
  let currentValue = getRandomIntInclusive(INITIAL_VALUE, END_VALUE);
  usedValues.forEach(element => {
    if(element === currentValue) getUniqueValue();
  });
  usedValues.push(currentValue);
  return currentValue;
}

function PhotoDescrition() {
  this.id = getUniqueValue();
  this.url = `photos/${getUniqueValue()}.jpg`
  this.description = ['Массив описания'];
  this.likes = getRandomIntInclusive(15, 200);
  this.comments = [{},{},{}];
}

let PhotoDescritionArray = [];
for (let index = 0; index < ARRAY_LENGTH; index++) {
  PhotoDescritionArray[index] = new PhotoDescrition();
}

PhotoDescritionArray.forEach(element => {
  console.log(element.id);
  console.log(element.url);
});

