import Config from '../Config';
import { EventEmitter } from 'events';

/**
 * Configure the widget
 *
 * @param config
 * @param events
 */
function configureWidget(config: Config, events: EventEmitter): void {
    const widget = new Widget(config.label, config.target);

    events.on('dataUpdated', () => {});
}
