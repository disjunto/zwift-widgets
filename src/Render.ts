import Prediction from './Widget/Prediction';
import './app.css';

require('./Menu/Renderer');

const prediction: Prediction = new Prediction(5000, '5km');
let paceArr = [];
// Create data monitor
window.zwiftData.on('outgoingPlayerState', (playerState, serverWorldTime) => {
    // Current Speed
    let speed = playerState.speed / 1e6;
    speed = Math.round( speed * 100 + Number.EPSILON ) / 100
    if (speed < Number.EPSILON) {
        return;
    }

    // Current Pace
    const pace = 3600 / speed;
    paceArr.push(pace);
    if (paceArr.length > 10) {
        paceArr.shift();
    }
    const avgPace = paceArr.reduce((a,b) => a + b, 0) / paceArr.length;

    const distance = playerState.distance;

    prediction.update(distance, avgPace, playerState.time)
});
