import { ipcRenderer } from 'electron';

const resizeEndHandler = (): void => {
    console.log('Resize ended, attempting to update');
    const targetHeight: number = window.innerWidth + 24;

    if (targetHeight !== window.innerHeight) {
        window.resizeTo(window.innerWidth, targetHeight);
    }
};

// Bind event handler to window
process.once('loaded', () => {
    window.events = ipcRenderer;

    let resizeEnd: NodeJS.Timeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeEnd);
        resizeEnd = setTimeout(resizeEndHandler, 250);
    });
});
