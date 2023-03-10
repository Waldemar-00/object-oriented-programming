import MainSlider from "./modules/sliders/main-slider";
import MiniSlider from "./modules/sliders/mini-slider";
import VideoPlayer from './modules/YTvideo';
window.addEventListener('DOMContentLoaded', () => {
    const mSlider = new MainSlider({ cover: '.page', buttons: '.next' });
    mSlider.render();
    const YTVideo = new VideoPlayer('.play__circle', '.overlay');
    YTVideo.init();
    const miniSlider = new MiniSlider({
        cover: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev'
    });
    miniSlider.init();
});

