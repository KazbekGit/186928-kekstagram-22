import {getRandomIntInclusive} from './util.js';

function makeUnique(){
  let usedValues = {};
  const unique = function(initial, end){
    let currentValue = getRandomIntInclusive(initial, end);
    if(!usedValues[currentValue]){
      usedValues[currentValue] = currentValue;
      return currentValue;
    }else{
      return unique(initial, end);
    }
  }
  return unique;
}

export {makeUnique};