'use strict';
import { saveData, loadData } from './local-storage-save-data/storage.js';
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(time) {
  saveData(LOCALSTORAGE_KEY, time.seconds);
}

player.setCurrentTime(loadData(LOCALSTORAGE_KEY) || 0);


