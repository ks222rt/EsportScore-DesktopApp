'use strict';

/*closeButton.addEventListener('click', () => {
    ipcRenderer.send('close-main-window');
});*/

console.log('javascript file loaded...!');

$(document).ready(() => {
    const {ipcRenderer} = require('electron');
    var closeButton = document.querySelector('.close-button');
    var minimizeButton = document.querySelector('.minimize-button');

    $('.button').on('click', () => {
        $('.content').toggleClass('isOpen');
        $('.minimize-button').toggleClass('isOpen');
        $('.close-button').toggleClass('isOpen');
    });

    $('.nav li a').on('click', function(e) {
        $('.nav li a').removeClass('active');
        $(this).addClass('active');           
    });

    closeButton.addEventListener('click', () => {
        ipcRenderer.send('close-main-window', 'close');
    }); 

    minimizeButton.addEventListener('click', () => {
        ipcRenderer.send('minimize-window', 'minimize');
    });
});

    
        