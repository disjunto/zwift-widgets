import { MenuItemConstructorOptions, Menu, BrowserWindow, MenuItem } from "electron";
import Store = require('electron-store');

const store = new Store();

const isMac = process.platform === "darwin";

const updatePredictor = (id: string, enabled: boolean, win: BrowserWindow): void => {
    const predictors = store.get('predictors');
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
                click: (menuItem: MenuItem, browserWindow: BrowserWindow): void => {
                    updatePredictor('1mi', menuItem.checked, browserWindow);
                }
            },
            {
                label: '5 km',
                type: 'checkbox',
                checked: !!predictors['5k'],
                click: (menuItem: MenuItem, browserWindow: BrowserWindow): void => {
                    updatePredictor('5k', menuItem.checked, browserWindow);
                }
            },
            {
                label: '10 km',
                type: 'checkbox',
                checked: !!predictors['10k'],
                click: (menuItem: MenuItem, browserWindow: BrowserWindow): void => {
                    updatePredictor('10k', menuItem.checked, browserWindow);
                }
            },
            {
                label: 'Half Marathon',
                type: 'checkbox',
                checked: !!predictors['hm'],
                click: (menuItem: MenuItem, browserWindow: BrowserWindow): void => {
                    updatePredictor('hm', menuItem.checked, browserWindow);
                }
            },
            {
                label: 'Marathon',
                type: 'checkbox',
                checked: !!predictors['fm'],
                click: (menuItem: MenuItem, browserWindow: BrowserWindow): void => {
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
        click: (menuItem: MenuItem, browserWindow: BrowserWindow): void => {
            browserWindow.webContents.openDevTools();
        }
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

export default menu;
