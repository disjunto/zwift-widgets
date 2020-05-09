import { MenuItemConstructorOptions } from "electron";

const { app, Menu, ipcMain } = require("electron");
const Store = require('electron-store');

const store = new Store();

const isMac = process.platform === "darwin";

const updatePredictor = (id, enabled, win) => {
    let predictors = store.get('predictors');
    predictors[id] = enabled;
    store.set('predictors', predictors);
    win.webContents.send('predictorsChange')
}

const predictors = store.get('predictors', {
    '1mi': false,
    '5km': true,
    '10km': true,
    'hm': false,
    'fm': true
});
const template: MenuItemConstructorOptions[] = [
    {
        label: 'Predictions',
        submenu: [
            {
                label: '1 mile',
                type: 'checkbox',
                checked: !!predictors['1mi'],
                click: (menuItem, browserWindow, event) => {
                    updatePredictor('1mi', menuItem.checked, browserWindow);
                }
            },
            {
                label: '5 km',
                type: 'checkbox',
                checked: !!predictors['5k'],
                click: (menuItem, browserWindow, event) => {
                    updatePredictor('5k', menuItem.checked, browserWindow);
                }
            },
            {
                label: '10 km',
                type: 'checkbox',
                checked: !!predictors['10k'],
                click: (menuItem, browserWindow, event) => {
                    updatePredictor('10k', menuItem.checked, browserWindow);
                }
            },
            {
                label: 'Half Marathon',
                type: 'checkbox',
                checked: !!predictors['hm'],
                click: (menuItem, browserWindow, event) => {
                    updatePredictor('hm', menuItem.checked, browserWindow);
                }
            },
            {
                label: 'Marathon',
                type: 'checkbox',
                checked: !!predictors['fm'],
                click: (menuItem, browserWindow, event) => {
                    updatePredictor('fm', menuItem.checked, browserWindow);
                }
            },
        ]
    },
    { type: 'separator' },
    {
        label: "File",
        submenu: [isMac ? { role: "close" } : { role: "quit" }],
    },
    {
        label: "Debug",
        click: (menuItem, browserWindow, event) => {
            browserWindow.webContents.openDevTools();
        }
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

export default menu;
