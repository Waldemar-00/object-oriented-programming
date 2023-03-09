import Slider from "./modules/slider";
import VideoPlayer from './modules/YTvideo';
window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();
    const YTVideo = new VideoPlayer('.play__circle', '.overlay');
    YTVideo.init();
});

