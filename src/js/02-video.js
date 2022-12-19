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

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0)