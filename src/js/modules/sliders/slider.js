export default class Slider {
    constructor({page = '', buttons = '', next = '', prev = '',} = {}) {
        this.page = document.querySelector(page);
        this.slides = Array.from(this.page.children);
        this.buttons = document.querySelectorAll(buttons);
        this.index = 0;
    }
}