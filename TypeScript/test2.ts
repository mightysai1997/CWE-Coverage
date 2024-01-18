const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Insecure setting
      contextIsolation: false, // Insecure setting
      webSecurity: false, // Insecure setting
    },
  });

  mainWindow.loadFile('index.html');
});
