export default class Slider {
    constructor(page, buttons) {
        this.page = document.querySelector(page);
        this.slides = Array.from(this.page.children);
        this.buttons = document.querySelectorAll(buttons);
        this.index = 0;
    }
    showSlides(index) {
        if (index > this.slides.length - 1) {
            this.index = 0;
        }
        if (index < 0) {
            this.index = this.slides.length - 1;
        }
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
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlide(1);
            });
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.index = 0;
                this.showSlides(this.index);
            });
        });
        this.showSlides(this.index);
    }
}