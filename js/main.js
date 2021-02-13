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

let usedValues = [];
let currentValue;
let getUniqueValue = function(initialValue, endValue){
  currentValue = getRandomIntInclusive(initialValue, endValue);
  /*   usedValues.forEach(element => {
    if(element === currentValue) getUniqueValue();
  }); */
  usedValues.push(currentValue);
  return currentValue;
}

/* let usedValues = [];
let getUniqueValue = function(initialValue, endValue){
  let isUnique = false;
  let currentValue;
  while(!isUnique){
    currentValue = getRandomIntInclusive(initialValue, endValue);
    let isInArray = false;
    for (let index = 0; index < usedValues.length; index++) {
      if(currentValue === usedValues[index]) isInArray = true;
    }
    isUnique = !isInArray;
  }
  return currentValue;
} */

let getRndArrayElement = function(arr){
  return arr[getRandomIntInclusive(0, arr.length - 1)];
}

let messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

let names = ['Егор', 'Людвиг', 'Арина', 'Артём', 'Кристина', 'Вероника', 'Хуан', 'Алексей Н. из Москвы', 'Роман'];

let photosDescription = ['Прошлое лето было восхитительным!', 'Потрясающий вид! Скоро повторим', 'Я счастлив как никогда!', 'На вебинаре #HTMLAcademy.)', 'Мой кот полон забот! Мяу!))', 'Новая история, новые приключения!', 'Сани для Сани'];

function Comments () {
  this.id = getUniqueValue(1, 1000);
  this.avatar = `img/avatar-${getUniqueValue(1, 6)}.svg`;
  this.message = getRndArrayElement(messages);
  this.name = getRndArrayElement(names);
}

function PhotoDescrition() {
  this.id = getUniqueValue(1, 25);
  this.url = `photos/${getUniqueValue(1, 25)}.jpg`
  this.description = getRndArrayElement(photosDescription);
  this.likes = getRandomIntInclusive(15, 200);
  this.comments = function(){
    let commentsArr = [];
    for (let index = 0; index < getRandomIntInclusive(1, 15); index++) {
      commentsArr.push(new Comments());
    }
    return commentsArr;
  };
}

let makePhotoDescriptionArray = function(photosNum) {
  let PhotoDescritionArray = [];
  for (let index = 0; index < photosNum; index++) {
    PhotoDescritionArray[index] = new PhotoDescrition();
  }
  return PhotoDescritionArray;
}

makePhotoDescriptionArray(25);