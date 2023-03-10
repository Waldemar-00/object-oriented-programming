import MainSlider from "./modules/sliders/main-slider";
import VideoPlayer from './modules/YTvideo';
window.addEventListener('DOMContentLoaded', () => {
    const mSlider = new MainSlider({page: '.page', buttons: '.next'});
    mSlider.render();
    const YTVideo = new VideoPlayer('.play__circle', '.overlay');
    YTVideo.init();
});

