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

    var selector = '.nav li a';
    $(selector).on('click', () => {
        console.log(selector);
        $(selector).removeClass('active');
        $(this).addClass('active');
    });
});

    
        