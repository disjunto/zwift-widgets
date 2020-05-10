import './widget.css';

export default class Base {
    protected id: string;
    protected widget: HTMLElement;

    protected createFromTemplate(template: string, preactivate?: (widget: HTMLElement, id: string) => void): void {
        // Generate ID
        const id = Math.random().toString(36);
        this.id = id;

        // Create and add to DOM
        /* eslint-disable */
        // @ts-ignore TS seems to be falling over here for an unknown reason // eslint-disable-line
        const widget = (document.querySelector('#template--' + template).content.cloneNode(true)) as HTMLElement;
        /* eslint-enable */
        widget.querySelector('.widget').id = 'widget-' + id;

        if (preactivate) {
            preactivate(widget, id);
        }

        document.getElementById('app-container').appendChild(widget);

        this.widget = document.getElementById('widget-' + id);
    }

    /**
     * Reformat a time given in seconds to [h]:mm:ss
     *
     * @param {number} time Time/Duration in seconds
     *
     * @return {string}
     */
    protected formatTime(time: number): string {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time - minutes * 60);
        const secondsString = seconds.toString().padStart(2, '0');

        // Personal preference, 62:30 reads better than 1:02:30
        if (minutes < 65) {
            return minutes + ':' + secondsString;
        }

        const hours = Math.floor(minutes / 60);
        const minutesString = Math.floor(minutes - hours * 60)
            .toString()
            .padStart(2, '0');

        return hours + ':' + minutesString + ':' + secondsString;
    }
}
