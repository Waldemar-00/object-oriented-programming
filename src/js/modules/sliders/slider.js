export default class Slider {
    constructor({
        cover = null,
        buttons = null,
        next = null,
        prev = null,
        activeClass = null,
        autoplay = null,
        cardActiveStyle = null,
        prevmodule = null,
        nextmodule = null,
        downBtn =null,} = {}) {
        this.cover = document.querySelector(cover);
        try { this.slides = this.cover.children; } catch (e) {}
        this.buttons = document.querySelectorAll(buttons);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.index = 0;

        this.activeClass = activeClass;
        this.autoplay = autoplay;
        this.cardActiveStyle = cardActiveStyle;
        this.downBtn = downBtn;
        this.prevmodule = prevmodule;
        this.nextmodule = nextmodule;
    }
}