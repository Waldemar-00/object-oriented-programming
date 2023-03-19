export default class VideoPlayer {
    constructor(open, overlay) {
        this.buttons = document.querySelectorAll(open);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }
    bindOpen() {
        this.buttons.forEach((btn, index) => {
            try {
                const elemGrey = btn.closest('.module__video-item').nextElementSibling;
                if (index % 2 === 0) {
                    elemGrey.setAttribute('data-disabled', true);
                }
            } catch (e) {}
            btn.addEventListener('click', () => {
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item')
                    .getAttribute('data-disabled') !== 'true') {
                    this.activeBtn = btn;
                    if (document.querySelector('iframe#frame')) {
                        this.overlay.style.display = 'flex';
                        if (this.path !== btn.parentElement.getAttribute('data-url')) {
                            this.path = btn.parentElement.getAttribute('data-url');
                            this.player.loadVideoById({videoId: this.path,});
                        }
                    } else {
                        this.path = btn.parentElement.getAttribute('data-url');
                        this.createPlayer(this.path);
                    }
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
            events: {
                'onStateChange': this.onPlayerStateChange,
            }
        });
        this.overlay.style.display = 'flex';
    }
    onPlayerStateChange(state) {
    const elemGrey = this.activeBtn.closest('.module__video-item').nextElementSibling;
    const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
    if (state.data === 0) {
        if (elemGrey.querySelector('.play__circle').classList.contains('closed')) {
            elemGrey.querySelector('.play__circle').classList.remove('closed');
            elemGrey.querySelector('svg').remove();
            elemGrey.querySelector('.play__circle').append(playBtn);
            elemGrey.querySelector('.play__text').classList.remove('attention');
            elemGrey.querySelector('.play__text').innerText = 'play video';
            elemGrey.style.opacity = 1;
            elemGrey.style.filter = 'none';
            elemGrey.setAttribute('data-disabled', false);
        }
    }
}
    init() {
        if (this.buttons.length > 0) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentElement.insertBefore(tag, firstScriptTag);
            this.bindOpen();
            this.bindClose();
        }
    }
}