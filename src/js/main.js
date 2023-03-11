import MainSlider from "./modules/sliders/main-slider";
import MiniSlider from "./modules/sliders/mini-slider";
import VideoPlayer from './modules/YTvideo';
window.addEventListener('DOMContentLoaded', () => {
    const mSlider = new MainSlider({ cover: '.page', buttons: '.next' });
    mSlider.render();
    const YTVideo = new VideoPlayer('.play__circle', '.overlay');
    YTVideo.init();
    const firstPageSlider = new MiniSlider({
        cover: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        cardActiveStyle: true,
    });
    const thirdPageSlider = new MiniSlider({
        cover: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        cardActiveStyle: true,
        autoplay: true,
    });
    const fifthPageSlider = new MiniSlider({
        cover: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active',
    });
    fifthPageSlider.init();
    thirdPageSlider.init();
    firstPageSlider.init();
});

