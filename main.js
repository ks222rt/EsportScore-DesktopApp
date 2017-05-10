const electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    ipcMain = electron.ipcMain;

let mainWindow;

var createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 650,
        frame: false,
        resizable: false
    });

    mainWindow.loadURL('file://' + __dirname + '/public/index.html');

    // Open devtools
    mainWindow.webContents.openDevTools();
};

app.on('ready', () => createWindow());

ipcMain.on('close-main-window', () => {
    app.quit();
});

ipcMain.on('minimize-window', () => {
    console.log('göm fönstret!!');
});
