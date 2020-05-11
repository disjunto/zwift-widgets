import { ipcRenderer } from 'electron';
import Store = require('electron-store');

// Bind event handler to window
process.once('loaded', () => {
    window.events = ipcRenderer;
    window.appConfig = new Store();
});
