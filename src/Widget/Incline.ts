import Base from './Base';

/**
 * Widget providing current incline values. Beneficial for runners where this data is hidden
 */
export default class Incline extends Base {
    /** @member {HTMLElement} inclineEl DOM element containing incline data */
    private inclineEl: HTMLElement;

    /**
     * Constructor.
     */
    constructor() {
        super();

        this.createFromTemplate('incline');
        this.inclineEl = this.widget.querySelector('.incline');
    }

    /**
     * Update incline widget with latest data
     *
     * @param {number} incline Current incline value (Unit currently unknown)
     */
    public update(incline: number): void {
        // Math.atan(pct/100) * (180/Math.PI) == degrees
        // Math.tan(deg / (180/Math.PI)) * 100 == pct
        this.inclineEl.textContent = incline.toString() + '%';
    }
}
