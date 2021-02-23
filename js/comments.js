import {uniqueCommentsId, uniqueCommentsAvatar, messages, names} from './vars.js';
import {getRndArrayElement} from './util.js';

function Comments () {
  this.id = uniqueCommentsId(1, 1000);
  this.avatar = `img/avatar-${uniqueCommentsAvatar(1, 6)}.svg`; 
  this.message = getRndArrayElement(messages);
  this.name = getRndArrayElement(names);
}

export {Comments};  