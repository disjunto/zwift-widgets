import Base from './Base';

/**
 * Widget providing current power values. Beneficial for runners where this data is hidden
 */
export default class Power extends Base {
    /** @member {HTMLElement} powerEl DOM element containing power data */
    private powerEl: HTMLElement;

    /**
     * Constructor.
     */
    constructor() {
        super();

        this.createFromTemplate('power');
        this.powerEl = this.widget.querySelector('.power');
    }

    /**
     * Update power widget with latest data
     *
     * @param {number} power Current power value (In W)
     */
    public update(power: number): void {
        this.powerEl.textContent = power + 'W';
    }
}
