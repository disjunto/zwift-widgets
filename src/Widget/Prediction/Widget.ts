import Base from '../Base';
import './prediction.css';

/**
 * Widget providing a predicted finish time for any given distance
 */
export default class Prediction extends Base {
    /** @member {number} targetDistance Distance (in m) this widget will predict */
    private targetDistance: number;

    /** @member {HTMLElement} progressBar Reference to the progress bar DOM element */
    private progressBar: HTMLElement;

    /**
     * Constructor.
     *
     * @param {string} targetDistance Distance (in m) this widget will predict
     * @param {string} label Label to show on the widget
     */
    constructor(label: string, targetDistance: number) {
        super();
        this.targetDistance = targetDistance;

        this.initialise(label);
    }

    /**
     * Initialise a new time prediction widget
     *
     * @param {string} label Label to display on the widget
     *
     * @returns {void}
     */
    private initialise(label: string): void {
        this.createFromTemplate('prediction', (widget: HTMLElement, id: string) => {
            widget.querySelector('.bar').id = 'progress-' + id;
            widget.querySelector<HTMLElement>('.label').textContent = label;
        });
        this.progressBar = document.getElementById('progress-' + this.id);

        // Scale label text size to fit
        const labelEl = this.widget.querySelector<HTMLElement>('.label');
        labelEl.style.fontSize = window.getComputedStyle(labelEl).fontSize;
        while (labelEl.offsetHeight > 75 || labelEl.offsetWidth > 180) {
            labelEl.style.fontSize = parseInt(labelEl.style.fontSize) - 1 + 'px';
        }
    }

    /**
     * Update the widget with more recent data
     *
     * @param {number} currentDistance The distance so far (in m)
     * @param {number} pace The current pace (in seconds per km)
     * @param {number} timeElapsed The amount of time elapsed (in seconds)
     *
     * @returns {void}
     */
    public update(currentDistance: number, pace: number, timeElapsed: number): void {
        const distToGo = (this.targetDistance - currentDistance) / 1000;
        if (distToGo < 0) {
            return;
        }

        const remainingTime = distToGo * pace;
        const estimate = remainingTime + timeElapsed;
        this.widget.dataset.estimate = this.formatTime(estimate);

        const percent = (currentDistance / this.targetDistance) * 100;
        const offset = ((100 - percent) / 100) * (Math.PI * 180);

        this.progressBar.style.strokeDashoffset = offset.toString();
    }
}
