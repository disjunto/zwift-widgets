import Base from "./Base";

export default class Splits extends Base {
    private splitDistance: number;

    constructor(splitDistance: number, label: string) {
        super();
        
        this.splitDistance = splitDistance;

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
    }
}
