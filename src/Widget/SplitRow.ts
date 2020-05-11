import Base from './Base';

/**
 * Widget class representing a row containing split information
 */
export default class SplitRow extends Base {
    /** @member {string} id ID for the widget element */
    protected id: string;

    /** @member {HTMLElement} widget DOM element that contains the widget */
    protected widget: HTMLElement;

    /** @member {HTMLElement} elapsed DOM element to write elapsed time */
    protected elapsed: HTMLElement;

    /** @member {HTMLElement} predicted DOM element to write predicted time */
    protected predicted: HTMLElement;

    /** @member {boolean} completed Has this split been completed */
    protected completed: boolean;

    /** @member {number} targetDistance Target split distance */
    targetDistance: number;

    /**
     * Constructor.
     *
     * @param {string} parentId Unique identifier of parent widget
     * @param {number} count Counter for this split
     * @param {number} targetDistance Target split distance
     */
    constructor(parentId: string, count: number, targetDistance: number) {
        super();

        this.targetDistance = targetDistance;

        // Generate ID
        const id = 'splits--row_' + Math.random().toString(36);
        this.id = id;

        // Create and add to DOM
        /* eslint-disable */
        // @ts-ignore TS seems to be falling over here for an unknown reason // eslint-disable-line
        const widget = (document.querySelector('#template__splits--row').content.cloneNode(true)) as HTMLElement;
        /* eslint-enable */
        widget.querySelector('.split').id = 'split-' + id;
        widget.querySelector('.split__counter').textContent = count.toString();

        document
            .getElementById('widget-' + parentId)
            .querySelector('.body')
            .prepend(widget);

        this.widget = document.getElementById('split-' + id);
        this.elapsed = this.widget.querySelector('.split__elapsed');
        this.predicted = this.widget.querySelector('.split__predicted');
    }

    /**
     * Update the current split state
     *
     * @param {number} splitDistance The distance so far (in m)
     * @param {number} pace The current pace (in seconds per km)
     * @param {number} timeElapsed The amount of time elapsed (in seconds)
     */
    public update(splitDistance: number, pace: number, timeElapsed: number): void {
        if (this.completed) {
            return;
        }

        const distToGo = (this.targetDistance - splitDistance) / 1000;
        const remainingTime = distToGo * pace;
        const estimate = remainingTime + timeElapsed;

        this.elapsed.textContent = this.formatTime(timeElapsed);
        this.predicted.textContent = this.formatTime(estimate);

        const pctComplete = (splitDistance / this.targetDistance) * 100;

        this.widget.style.background =
            '-webkit-linear-gradient(left, rgb(95,95,95) ' + pctComplete + '%, rgba(0,0,0,0.6) ' + pctComplete + '%)';
    }

    /**
     * Mark the split as completed
     *
     * @param {number} timeElapsed FInal time elapsed for this split
     */
    public markComplete(timeElapsed: number): void {
        this.completed = true;
        this.predicted.remove();

        this.widget.classList.add('split--complete');
        const icon = this.widget.querySelector('i');
        icon.remove();
        icon.classList.add('fa-stopwatch');
        icon.classList.remove('fa-angle-double-right', 'blink');

        this.elapsed.classList.remove('split__elapsed');
        this.elapsed.classList.add('split__complete');
        this.elapsed.textContent = this.formatTime(timeElapsed);
        this.elapsed.prepend(icon);
    }
}
