window.addEventListener('DOMContentLoaded', () => {
    const minimizeButton = document.getElementById('minimize-btn');
    const maxUnmaxButton = document.getElementById('max-unmax-btn');
    const closeButton = document.getElementById('close-btn');

    minimizeButton.addEventListener('click', () => {
        window.minimizeWindow();
    });

    maxUnmaxButton.addEventListener('click', () => {
        const icon = maxUnmaxButton.querySelector('i.far');

        window.maxUnmaxWindow();

        // Change the middle maximize-unmaximize icons.
        if (window.isWindowMaximized()) {
            icon.classList.remove('fa-square');
            icon.classList.add('fa-clone');
        } else {
            icon.classList.add('fa-square');
            icon.classList.remove('fa-clone');
        }
    });

    closeButton.addEventListener('click', () => {
        window.closeWindow();
    });
});
