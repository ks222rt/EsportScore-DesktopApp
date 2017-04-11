const electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    ipcMain = electron.ipcMain;
//const {app, BrowserWindow, icpMain} = electron;

let mainWindow;

var createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 650,
        frame: false,
        resizable: false
    });

    mainWindow.loadURL('file://' + __dirname + '/public/index.html');

    // Open devtools
    mainWindow.webContents.openDevTools();
};

ipcMain.on('close-main-window', () => {
    app.quit();
});

app.on('ready', () => createWindow());

/*ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  console.log(event);
  event.sender.send('asynchronous-reply', 'pong')
})*/
