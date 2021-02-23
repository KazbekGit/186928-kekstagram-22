import {makeUnique} from './make-unique.js';

const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const names = ['Егор', 'Людвиг', 'Арина', 'Артём', 'Кристина', 'Вероника', 'Хуан', 'Алексей Н. из Москвы', 'Роман'];

const photosDescriptions = ['Прошлое лето было восхитительным!', 'Потрясающий вид! Скоро повторим', 'Я счастлив как никогда!', 'На вебинаре #HTMLAcademy.)', 'Мой кот полон забот! Мяу!))', 'Новая история, новые приключения!', 'Сани для Сани'];

const uniquePhotoId = makeUnique();
const uniquePhotoURL = makeUnique();
const uniqueCommentsId = makeUnique();
const uniqueCommentsAvatar = makeUnique();

export {messages, names, photosDescriptions, uniquePhotoId, uniquePhotoURL, uniqueCommentsId, uniqueCommentsAvatar};