const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Disable web security (This is a security vulnerability)
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({ responseHeaders: { ...details.responseHeaders, 'Content-Security-Policy': ['default-src \'self\''] } });
  });

  mainWindow.loadFile('index.html');
});
