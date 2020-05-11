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
        ]);
    });
}
