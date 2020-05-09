import { remote, ipcRenderer, BrowserWindow } from 'electron';

export function getCurrentWindow(): BrowserWindow {
  return remote.getCurrentWindow();
}

export function openMenu(x: number, y: number): void {
  ipcRenderer.send(`display-app-menu`, { x, y });
}

export function minimizeWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
  if (browserWindow.minimizable) {
    browserWindow.minimize();
  }
}

export function maximizeWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
  if (browserWindow.maximizable) {
    browserWindow.maximize();
  }
}

export function unmaximizeWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
  browserWindow.unmaximize();
}

export function maxUnmaxWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
  if (browserWindow.isMaximized()) {
    browserWindow.unmaximize();
  } else {
    browserWindow.maximize();
  }
}

export function closeWindow(browserWindow: BrowserWindow = getCurrentWindow()): void {
  browserWindow.close();
}

export function isWindowMaximized(browserWindow: BrowserWindow = getCurrentWindow()): boolean {
  return browserWindow.isMaximized();
}
