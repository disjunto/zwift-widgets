import { ipcRenderer } from 'electron';
import ZwiftPacketMonitor from './Zwift/ZwiftPacketMonitor';
import { address } from 'ip';

console.log('Preload running');

const {
    getCurrentWindow,
    openMenu,
    minimizeWindow,
    unmaximizeWindow,
    maxUnmaxWindow,
    isWindowMaximized,
    closeWindow,
} = require("./Menu/Functions");

window.addEventListener("DOMContentLoaded", () => {
    window.getCurrentWindow = getCurrentWindow;
    window.openMenu = openMenu;
    window.minimizeWindow = minimizeWindow;
    window.unmaximizeWindow = unmaximizeWindow;
    window.maxUnmaxWindow = maxUnmaxWindow;
    window.isWindowMaximized = isWindowMaximized;
    window.closeWindow = closeWindow;
});

// Create data monitor
window.zwiftData = new ZwiftPacketMonitor(address());
window.zwiftData.start();

// Bind a close function to the renderer
process.once('loaded', () => {
    window.ipcRenderer = ipcRenderer;
});

const Store = require('electron-store');

window.appConfig = new Store();    
