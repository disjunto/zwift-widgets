import { app, BrowserWindow, IpcRenderer, ipcMain, IpcMainEvent } from 'electron';
import ZwiftPacketMonitor from './Zwift/ZwiftPacketMonitor';
import Store = require('electron-store');
import * as path from 'path';
import { address } from 'ip';
import { PlayerState } from './Zwift/proto';

/**
 * Declare globals on window object
 */
declare global {
    interface Window {
        appConfig: Store;
        events: IpcRenderer;
        getCurrentWindow: () => BrowserWindow;
        minimizeWindow: () => void;
        unmaximizeWindow: () => void;
        maxUnmaxWindow: () => void;
        isWindowMaximized: () => boolean;
        closeWindow: () => void;
    }
}

const isDev: boolean = process.env.NODE_ENV === 'development';

/**
 * Create main application window
 *
 * @returns Promise<BrowserWindow>
 */
function createSettingsWindow(): BrowserWindow {
    // TODO: Fix this mess to get builds working
    const preloadPath: string = isDev ? path.resolve('.', 'out', 'preload.js') : path.join(__dirname, 'preload.js');

    const mainWindow: BrowserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'settings', 'preload.js'),
        },
    });

    // TODO: Update this to get builds working
    mainWindow.loadFile(path.join(__dirname, 'settings', 'index.html'));

    if (isDev) mainWindow.webContents.openDevTools();

    return mainWindow;
}

let windows: BrowserWindow[] = [];
app.whenReady()
    .then(createSettingsWindow)
    .then((browser: BrowserWindow) => {
        ipcMain.on('startWidgets', (event: IpcMainEvent, widgets: { name: string; config: object }[]) => {
            // Close existing widgets
            windows.forEach((browserWindow: BrowserWindow) => {
                browserWindow.close();
            });
            windows = [];

            // Create data monitor
            const monitor = new ZwiftPacketMonitor(address());
            monitor.start();

            const widgetPreload = path.join(__dirname, 'widgets', 'preload.js');

            widgets.forEach((widget) => {
                const widgetWindow = new BrowserWindow({
                    width: 260,
                    height: 260,
                    frame: false,
                    transparent: true,
                    alwaysOnTop: true,
                    webPreferences: {
                        preload: widgetPreload,
                    },
                });
                widgetWindow.loadURL(path.join(__dirname, 'widgets', widget.name, 'index.html'));

                if (isDev) widgetWindow.webContents.openDevTools();
                widgetWindow.webContents.executeJavaScript('configureWidget(' + widget.config + ');');

                windows.push(widgetWindow);
            });

            // Redirect to each active widget window
            monitor.on('outgoingPlayerState', (playerState: PlayerState) => {
                windows.forEach((browserWindow: BrowserWindow) => {
                    browserWindow.webContents.send('dataUpdated', playerState);
                });
            });
        });

        ipcMain.on('closeApplication', () => {
            // Close all widgets
            windows.forEach((browserWindow: BrowserWindow) => {
                browserWindow.close();
            });
        });
    });
