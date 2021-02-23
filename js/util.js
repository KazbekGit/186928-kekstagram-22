import {PhotoDescrition} from './photo-description.js';

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

const checkStringLength = function(userString, maxLength){
  if (userString.length > maxLength) return false;
  return true;
}

const getRndArrayElement = function(arr){
  return arr[getRandomIntInclusive(0, arr.length - 1)];
}

const makePhotoDescriptionArray = function(photosNum) {
  let PhotoDescritionArray = [];
  for (let index = 0; index < photosNum; index++) {
    PhotoDescritionArray[index] = new PhotoDescrition();
  }
  return PhotoDescritionArray;
}

export {getRandomIntInclusive, checkStringLength, getRndArrayElement, makePhotoDescriptionArray};
  