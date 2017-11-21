import { app, BrowserWindow } from 'electron';
import { GetDebugState, EnableDebugExtensions } from './debugging/debugHandler';
import { enableLiveReload } from 'electron-compile';
let mainWindow: Electron.BrowserWindow | null = null;

const debugState = GetDebugState();

if (debugState.isDevMode) {
  enableLiveReload({ strategy: 'react-hmr' });
}

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1460,
    height: 900
  });

  EnableDebugExtensions(debugState, mainWindow);

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
