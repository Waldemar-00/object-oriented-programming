export default class Slider {
    constructor(page, buttons) {
        this.page = document.querySelector(page);
        this.sliders = this.page.children;
        this.buttons = document.querySelectorAll(buttons);
    }
}