'use strict';
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(time) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(time.seconds)
  );
}

const savedTime = localStorage.getItem('videoplayer-current-time');
// Нижче код я трошки не зрозумів. Коли гуглив цей метод (setCurrentTime), стикнувся з цим.
// Чому б просто не записати без if? Ось так: 
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// Як я зрозумів це для того, щоб час не зберігався у локальне сховище, якщо відео не програвалося ще. Чи це так?
// Поясніть будь ласка)))
if (savedTime) {
  player.setCurrentTime(savedTime);
}
