'use strict';

var ipcRenderer = require('electron').ipcRenderer
var closeButton = document.querySelector('.close');

/*closeButton.addEventListener('click', () => {
    ipcRenderer.send('close-main-window');
});*/

console.log('javascript file loaded...!');

$(document).ready(() => {
    $('.button').on('click', () => {
        $('.content').toggleClass('isOpen');
        $('.minimize-button').toggleClass('isOpen');
        $('.close-button').toggleClass('isOpen');
    });

    $('.nav li a').on('click', function(e) {
        $('.nav li a').removeClass('active');
        $(this).addClass('active');           
    });
});

    
        