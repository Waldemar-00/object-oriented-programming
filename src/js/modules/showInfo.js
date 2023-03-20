export default class ShowInfo {
    constructor(triggerSelector) {
        this.buttons = document.querySelectorAll(triggerSelector);
    }
    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const sibling = btn.closest('.module__info-show').nextElementSibling;
                sibling.classList.toggle('msg');
                sibling.style.marginTop = '20px';
                sibling.classList.add('animated', 'fadeIn');
                
            });
        });
    }
}