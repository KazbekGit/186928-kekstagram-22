import {uniquePhotoId, uniquePhotoURL, photosDescriptions} from './vars.js';
import {Comments} from './comments.js';
import {getRndArrayElement, getRandomIntInclusive} from './util.js';

function PhotoDescrition() {
  this.id = uniquePhotoId(1, 25);
  this.url = `photos/${uniquePhotoURL(1, 25)}.jpg`
  this.description = getRndArrayElement(photosDescriptions);
  this.likes = getRandomIntInclusive(15, 200);
  this.comments = function(){
    let commentsArr = [];
    for (let index = 0; index < getRandomIntInclusive(1, 15); index++) {
      commentsArr.push(new Comments());
    }
    return commentsArr;
  };
}

export {PhotoDescrition};