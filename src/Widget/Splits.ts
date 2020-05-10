import Base from './Base';
import SplitRow from './SplitRow';
import './splits.css';

/**
 * Widget providing custom splits lengths similar to the inbuilt 1km/1mi splits
 */
export default class Splits extends Base {
    private targetDistance: number;
    private lastSplitDistance: number;
    private lastSplitTime: number;
    private splits: SplitRow[];

    constructor(targetDistance: number, label: string) {
        super();

        this.targetDistance = targetDistance;
        this.lastSplitDistance = 0;

        this.initialise(label);
    }

    /**
     * Initialise a new custom split widget
     *
     * @param {string} label Label to display on the widget
     *
     * @returns {void}
     */
    private initialise(label: string): void {
        this.createFromTemplate('splits', (widget: HTMLElement) => {
            widget.querySelector('.label').textContent = label;
        });

        this.splits = [new SplitRow(this.id, 1, this.targetDistance)];
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
        // TODO: Implement
        if (currentDistance - this.lastSplitDistance > this.targetDistance) {
            // Complete current split
            this.splits[this.splits.length - 1].markComplete(timeElapsed - this.lastSplitTime);

            // Create a split
            this.lastSplitDistance = currentDistance;
            this.lastSplitTime = timeElapsed;
            this.splits.push(new SplitRow(this.id, this.splits.length, this.targetDistance));
        }

        const currentSplit = this.splits[this.splits.length - 1];
        const splitDistance = currentDistance - this.lastSplitDistance;
        const splitTime = timeElapsed - this.lastSplitTime;
        currentSplit.update(splitDistance, pace, splitTime);
    }
}
