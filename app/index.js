'use strict';

var ipcRenderer = require('electron').ipcRenderer
var closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
    ipcRenderer.send('close-main-window');
})