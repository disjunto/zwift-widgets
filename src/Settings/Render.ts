const startEl = document.getElementById('start');

if (startEl) {
    startEl.addEventListener('click', () => {
        window.events.send('startWidgets', [
            {
                name: 'prediction',
                config: JSON.stringify({
                    label: '5km',
                    target: 5000,
                }),
            },
            {
                name: 'prediction',
                config: JSON.stringify({
                    label: '10km',
                    target: 10000,
                }),
            },
            {
                name: 'customsplit',
                config: JSON.stringify({
                    label: '400m',
                    target: 400,
                }),
            },
        ]);
    });
}
