export default class Slider {
    constructor({cover = null, buttons = null, next = null, prev = null,} = {}) {
        this.cover = document.querySelector(cover);
        this.slides = Array.from(this.cover.children);
        this.buttons = document.querySelectorAll(buttons);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.index = 0;
    }
}