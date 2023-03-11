export default class Slider {
    constructor({
        cover = null,
        buttons = null,
        next = null,
        prev = null,
        activeClass = null,
        autoplay = null,
        cardActiveStyle = null,
        } = {}) {
        this.cover = document.querySelector(cover);
        this.slides = this.cover.children;
        this.buttons = document.querySelectorAll(buttons);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.index = 0;

        this.activeClass = activeClass;
        this.autoplay = autoplay;
        this.cardActiveStyle = cardActiveStyle;
    }
}