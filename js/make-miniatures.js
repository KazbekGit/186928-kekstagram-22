import {makePhotoDescriptionArray} from './util.js';

const photoDescriptionArray = makePhotoDescriptionArray(25);

let miniPhotosFragment = document.createDocumentFragment();

let templatePicture = document.querySelector('#picture').content;
let element = templatePicture.querySelector('.picture');

photoDescriptionArray.forEach(function(elem){
  let clonedElement = element.cloneNode(true);
  let pictureImg = clonedElement.querySelector('.picture__img');
  let pictureLikes = clonedElement.querySelector('.picture__likes');
  let pictureComments = clonedElement.querySelector('.picture__comments');

  pictureImg.src = elem.url;
  pictureLikes.textContent = elem.likes;
  pictureComments.textContent = elem.comments;
  miniPhotosFragment.appendChild(clonedElement);
});

let container = document.querySelector('.pictures');
container.append(miniPhotosFragment);


