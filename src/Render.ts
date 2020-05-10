import Prediction from './Widget/Prediction';
import './app.css';
import Splits from './Widget/Splits';

require('./Menu/Renderer');

// TODO: Pull/build this from configuration
const widgets = [new Prediction(10800, 'TFA Stage 2 (A)'), new Splits(2000, '2km'), new Splits(5000, '5km')];

const paceArr: number[] = [];
// Create data monitor
window.zwiftData.on('outgoingPlayerState', (playerState) => {
    // Current Speed
    let speed = playerState.speed / 1e6;
    speed = Math.round(speed * 100 + Number.EPSILON) / 100;
    if (speed < Number.EPSILON) {
        return;
    }

    // Current Pace
    const pace = 3600 / speed;
    paceArr.push(pace);
    if (paceArr.length > 10) {
        paceArr.shift();
    }
    const avgPace = paceArr.reduce((a, b) => a + b, 0) / paceArr.length;

    const distance = playerState.distance;

    widgets.forEach((widget) => widget.update(distance, avgPace, playerState.time));
});
