import { remote, ipcRenderer, BrowserWindow } from 'electron';

/**
 * Get the current active window
 *
 * @returns {BrowserWindow}
 */
export function getCurrentWindow(): BrowserWindow {
    return remote.getCurrentWindow();
}

/**
 * Open the menu at a given screen position
 *
 * @param {number} x X coordinate to open menu
 * @param {number} y Y coordinate to open menu
 */
export function openMenu(x: number, y: number): void {
    ipcRenderer.send(`display-app-menu`, { x, y });
}

/**
 * Minimise the window
 *
 * @param {BrowserWindow} browserWindow Browser window to interact with
 */
export function minimizeWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
    if (browserWindow.minimizable) {
        browserWindow.minimize();
    }
}

/**
 * Maximise the window
 *
 * @param {BrowserWindow} browserWindow Browser window to interact with
 */
export function maximizeWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
    if (browserWindow.maximizable) {
        browserWindow.maximize();
    }
}

/**
 * Unmaximise the window
 *
 * @param {BrowserWindow} browserWindow Browser window to interact with
 */
export function unmaximizeWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
    browserWindow.unmaximize();
}

/**
 * Toggle the maximised state on the window
 *
 * @param {BrowserWindow} browserWindow Browser window to interact with
 */
export function maxUnmaxWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
    if (browserWindow.isMaximized()) {
        browserWindow.unmaximize();
    } else {
        browserWindow.maximize();
    }
}

/**
 * Close the window
 *
 * @param {BrowserWindow} browserWindow Browser window to interact with
 */
export function closeWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
    browserWindow.close();
}

/**
 * Checks if the window is currently maximised
 *
 * @param {BrowserWindow} browserWindow Browser window to interact with
 *
 * @returns {boolean}
 */
export function isWindowMaximized(browserWindow: BrowserWindow = getCurrentWindow()): boolean {
    return browserWindow.isMaximized();
}
