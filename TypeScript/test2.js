const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Insecure preference: Enabling Node.js integration without proper safeguards
    },
  });

  // Disable web security (Insecure configuration)
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['default-src \'self\''],
      },
    });
  });

  mainWindow.loadFile('index.html');
});
