import Slider from './slider';
export default class MiniSlider extends Slider {
    constructor(cover, next, prev, activeClass, autoplay, cardActiveStyle, downBtn) {
        super(cover, next, prev, activeClass, autoplay, cardActiveStyle, downBtn);
    }
    decorize() {
        for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].classList.remove(this.activeClass);
                if (this.cardActiveStyle) {
                    this.slides[i].querySelector('.card__title').style.opacity = "0.4";
                    this.slides[i].querySelector('.card__controls').style.opacity = "0.4";
                    this.slides[i].querySelector('.card__controls-arrow').style.opacity = "0";
                }
        }
        this.slides[0].classList.add(this.activeClass);
        if (this.cardActiveStyle) {
            this.slides[0].querySelector('.card__title').style.opacity = "1";
            this.slides[0].querySelector('.card__controls').style.opacity = "1";
            this.slides[0].querySelector('.card__controls .card__controls-arrow').style.opacity = "1";
            
        }
    }
    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());
        this.prev.addEventListener('click', () => {
            if (this.downBtn) {
                this.cover.insertBefore(this.slides[this.slides.length - 3], this.slides[0]);
            } else {
                this.cover.prepend(this.slides[this.slides.length - 1]);
            }
            this.decorize();
        });
    }
    nextSlide() {
        if (this.downBtn) {
            this.cover.insertBefore(this.slides[0], this.slides[this.slides.length - 2]);
        } else {
            this.cover.append(this.slides[0]);
        }
        this.decorize();
    }
    init() {
        try {
        this.cover.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
        this.bindTriggers();
        this.decorize();
        if (this.autoplay) {
                const interval = setInterval(() => this.nextSlide(), 5000);
                this.next.addEventListener('click', () => {
                    clearInterval(interval);    
                });
                this.prev.addEventListener('click', () => {
                    clearInterval(interval);
                });
            }
        } catch(e){}
    }
}