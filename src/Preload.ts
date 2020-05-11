import { ipcRenderer } from 'electron';
import Store = require('electron-store');
import {
    getCurrentWindow,
    minimizeWindow,
    unmaximizeWindow,
    maxUnmaxWindow,
    isWindowMaximized,
    closeWindow,
} from './Menu/Functions';

window.addEventListener('DOMContentLoaded', () => {
    window.getCurrentWindow = getCurrentWindow;
    window.minimizeWindow = minimizeWindow;
    window.unmaximizeWindow = unmaximizeWindow;
    window.maxUnmaxWindow = maxUnmaxWindow;
    window.isWindowMaximized = isWindowMaximized;
    window.closeWindow = closeWindow;
});

// Bind a close function to the renderer
process.once('loaded', () => {
    window.events = ipcRenderer;
});

window.appConfig = new Store();
