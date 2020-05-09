import { app, BrowserWindow, IpcRenderer } from 'electron';
import ZwiftPacketMonitor from './Zwift/ZwiftPacketMonitor';
import Store = require('electron-store');
import menu from './Menu/Definition';
import * as path from 'path';

/**
 * Declare globals on window object
 */
declare global {
    interface Window {
        appConfig: Store;
        zwiftData: ZwiftPacketMonitor;
        ipcRenderer: IpcRenderer;
        getCurrentWindow: () => BrowserWindow;
        openMenu: (x: number, y: number) => void;
        minimizeWindow: () => void;
        unmaximizeWindow: () => void;
        maxUnmaxWindow: () => void;
        isWindowMaximized: () => boolean;
        closeWindow: () => void;
    }
}

/**
 * Create main application window
 */
function createWindow (): void {
  console.log(process.env.NODE_ENV);
  const isDev: boolean = process.env.NODE_ENV === "development";
  const preloadPath: string = isDev ?
    path.resolve('.', 'out', 'preload.js') :
    path.join(__dirname, 'preload.js');

  let mainWindow: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      preload: preloadPath
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.webContents.openDevTools();
}
 
app.whenReady().then(createWindow)
