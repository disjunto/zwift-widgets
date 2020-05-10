/**
 * Widget class representing a row containing split information
 */
export default class SplitRow {
    /** @member {string} id ID for the widget element */
    id: string;

    /** @member {HTMLElement} widget DOM element that contains the widget */
    widget: HTMLElement;

    /** @member {HTMLElement} elapsed DOM element to write elapsed time */
    elapsed: HTMLElement;

    /** @member {HTMLElement} predicted DOM element to write predicted time */
    predicted: HTMLElement;

    /** @member {boolean} completed Has this split been completed */
    completed: boolean;

    /**
     * Constructor.
     *
     * @param {string} parentId Unique identifier of parent widget
     * @param {number} count Counter for this split
     */
    constructor(parentId: string, count: number) {
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

        document.getElementById(parentId).querySelector('.body').appendChild(widget);

        this.widget = document.getElementById('split-' + id);
        this.elapsed = this.widget.querySelector('.split__elapsed');
        this.predicted = this.widget.querySelector('.split__predicted');
    }

    /**
     * Update the current split state
     */
    public update(): void {
        if (this.completed) {
            return;
        }

        // TODO: Implement
    }

    /**
     * Mark the split as completed
     */
    public markComplete(): void {
        this.completed = true;
        this.predicted.remove();

        const icon = this.widget.querySelector('i');
        icon.remove();

        this.elapsed.classList.remove('split__elapsed');
        this.elapsed.classList.add('split__complete');
        this.elapsed.append(icon);
    }
}
