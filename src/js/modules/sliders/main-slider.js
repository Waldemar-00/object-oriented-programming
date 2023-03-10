import Slider from './slider';
export default class MainSlider extends Slider {
    constructor(buttons) {
        super(buttons);
    }
    showSlides(index) {
        if (index > this.slides.length - 1) {
        this.index = 0;
        }
        if (index < 0) {
            this.index = this.slides.length - 1;
        }
        try {
            this.hanson.style.opacity = "0";
            if (index === 2) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.classList.add('slideInUp');
                    this.hanson.style.opacity = "1";
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch (e) { }
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });
        this.slides[this.index].style.display = 'block';
    }
    plusSlide(step) {
        this.showSlides(this.index += step);
    }
    minusSlide(step) {
    this.showSlides(this.index -= step);
    }
    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch(e){}
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlide(1);
            });
            btn.parentElement.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.index = 0;
                this.showSlides(this.index);
            });
        });
        this.showSlides(this.index);
    }
}