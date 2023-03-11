import Slider from './slider';
export default class MiniSlider extends Slider {
    constructor(cover, next, prev, activeClass, autoplay, cardActiveStyle) {
        super(cover, next, prev, activeClass, autoplay, cardActiveStyle);

    }
    decorize() {
        Array.from(this.slides).forEach(slide => {
            slide.classList.remove(this.activeClass);
            //!for native js
            if (this.cardActiveStyle) {
                slide.querySelector('.card__title').style.opacity = "0.4";
                slide.querySelector('.card__controls').style.opacity = "0.4";
                slide.querySelector('.card__controls-arrow').style.opacity = "0";
            }
        });
        this.slides[0].classList.add(this.activeClass);
        //!throw native js
        if (this.cardActiveStyle) {
            this.slides[0].querySelector('.card__title').style.opacity = "1";
            this.slides[0].querySelector('.card__controls').style.opacity = "1";
            this.slides[0].querySelector('.card__controls .card__controls-arrow').style.opacity = "1";
            
        }
    }
    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.cover.append(this.slides[0]);
            this.decorize();
        });
        this.prev.addEventListener('click', () => {
            this.cover.prepend(this.slides[this.slides.length - 1]);
            //we can use insertBefore if we need exact position
            this.decorize();
        });
    }
    init() {
        this.cover.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
        this.bindTriggers();
        //!for native js
        this.decorize();
    }
}