export default class VideoPlayer {
    constructor(open, overlay) {
        this.buttons = document.querySelectorAll(open);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }
    bindOpen() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                } else {
                    const path = btn.parentElement.getAttribute('data-url');
                    this.createPlayer(path);
                }
            });
        });
    }
    bindClose() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }
    createPlayer(url) {
        this.player = new YT.Player('frame', {
        height: '100%',
        width: '100%',
        videoId: url,
        });
        console.log(this.player);
        this.overlay.style.display = 'flex';
    }
    init() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentElement.insertBefore(tag, firstScriptTag);
        this.bindOpen();
        this.bindClose();
    }
}