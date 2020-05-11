import Config from '../Config';
import { IpcRendererEvent } from 'electron';
import { PlayerState } from '../../Zwift/proto';
import Widget from './Widget';

declare global {
    interface Window {
        configureWidget: (config: Config) => void;
    }
}

/**
 * Configure the widget
 *
 * @param config
 * @param events
 */
window.configureWidget = (config: Config): void => {
    const widget = new Widget(config.label, config.target);

    const paceArr: number[] = [];
    window.events.on('dataUpdated', (event: IpcRendererEvent, data: PlayerState) => {
        // Current Speed
        let speed = data.speed / 1e6;
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

        const distance = data.distance;
        widget.update(distance, avgPace, data.time);
    });
};
