import Slider from './slider';
export default class MiniSlider extends Slider {
    constructor(cover, next, prev) {
        super(cover, next, prev);

    }
    init() {
        console.log(this.cover, this.next, this.prev);
    }
}