export default class Download {
    constructor(selector, path) {
        this.buttons = document.querySelectorAll(selector); 
        this.path = path;
    }
    downloadFile(link) {
        const a = document.createElement('a');
        a.setAttribute('href', link);
        a.setAttribute('download', 'file://' + link);
        a.style.display = 'none';
        document.body.append(a);
        a.click();
        document.body.remove(a);
    }
    init() {
        this.buttons.forEach(btn => {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.downloadFile(this.path);
            });
        });
    }
}