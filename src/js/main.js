import MainSlider from "./modules/sliders/main-slider";
import MiniSlider from "./modules/sliders/mini-slider";
import Form from "./modules/forms";
import Select from "./modules/sliders/select";
import VideoPlayer from './modules/YTvideo';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';
document.addEventListener('DOMContentLoaded', () => {
    const mainPageSlider = new MainSlider({
        cover: '.page',
        buttons: '.next',
    });
    mainPageSlider.render();
    const modulePageSlider = new MainSlider({
        cover: '.moduleapp', buttons: '.next', prevmodule: '.prevmodule',
        nextmodule: '.nextmodule',
    });
    modulePageSlider.render();
    new VideoPlayer('.play__circle', '.overlay').init();
    new VideoPlayer('.module__video-item .play__circle', '.overlay').init();
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
        downBtn: true,
    });
    fifthPageSlider.init();
    thirdPageSlider.init();
    firstPageSlider.init();
    new Select('.officerold', '.officer__card-item').init();
    new Select('.officernew', '.officer__card-item').init();
    new Form('form', 'input[data-tel-input]').init();
    new ShowInfo('.module__info-show .plus').init();
    new Download('.download', "assets/img/Bitmap.jpg").init();
});

