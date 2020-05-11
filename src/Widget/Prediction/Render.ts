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

    window.events.on('dataUpdated', (event: IpcRendererEvent, data: PlayerState) => {});
};