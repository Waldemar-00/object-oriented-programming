export default class Select {
    constructor(officer, cardItems) {
        this.officer = document.querySelector(officer);
        try {
            this.cardItems = this.officer.querySelectorAll(cardItems);
            this.array = Array.from(this.cardItems);
            this.clickItem = this.array.pop();
        } catch(e) {}
    }
    hiddenCardItems() {
        this.array.forEach(item => {
            item.style.display = 'none';
        });
    }
    eventClick() {
        this.clickItem.addEventListener('click', () => {
            this.array[0].classList.add('animated', 'fadeIn');
            this.array[0].style.display = 'flex';
            this.array.shift();
            if (this.array.length === 0) {
                this.clickItem.classList.add('animated', 'fadeIn');
                this.clickItem.style.display = 'none';
            }
        });
    }
    init() {
        try {
            this.hiddenCardItems();
            this.eventClick();
        } catch (e) {}
    }
}