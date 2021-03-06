import './app.css';
import { Prediction, Splits, Incline, Power } from './Widget';
import { PlayerState } from './Zwift/proto';

require('./Menu/Renderer');

// TODO: Pull/build this from configuration
const widgets = [new Prediction(21097, 'Half Marathon'), new Splits(5000, '5km'), new Power(), new Incline()];
(widgets[2] as Power).update(50);
(widgets[3] as Incline).update(6);
const paceArr: number[] = [];
// Create data monitor
window.zwiftData.on('outgoingPlayerState', (playerState: PlayerState) => {
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
    const avgPace = paceArr.reduce((carry: number, pace: number) => pace + carry, 0) / paceArr.length;

    const distance = playerState.distance;

    widgets.forEach((widget: Incline | Power | Prediction | Splits) => {
        // TODO: Make update params more flexible to allow easier extension
        if (widget instanceof Incline) {
            widget.update(playerState.climbing);
            return;
        }
        if (widget instanceof Power) {
            widget.update(playerState.power);
            return;
        }
        widget.update(distance, avgPace, playerState.time);
    });
});
