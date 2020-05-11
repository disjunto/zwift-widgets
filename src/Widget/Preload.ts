import { ipcRenderer } from 'electron';

// Bind event handler to window
process.once('loaded', () => {
    window.events = ipcRenderer;
});
