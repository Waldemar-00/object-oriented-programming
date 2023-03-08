export default class Slider {
    constructor(page, buttons) {
        this.page = document.querySelector(page);
        this.slides = Array.from(this.page.children);
        this.buttons = document.querySelectorAll(buttons);
        this.index = 1;
    }
    showSlides(index) {
        if (index > this.slides.length) {
            this.index = 1;
        }
        if (index < 1) {
            this.index = this.slides.length;
        }
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });
        this.slides[this.index - 1].style.display = 'block';
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
                this.index = 1;
                this.showSlides(this.index);
            });
        });
        this.showSlides(this.index);
    }
}