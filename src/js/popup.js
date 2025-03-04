export class PopupWindow {
    overlay = document.querySelector('.overlay');
    constructor(popupSelector, openerSelector, closerSelector) {
        this.popupWindow = document.querySelector(`.${popupSelector}`);
        this.popupOpener = document.querySelector(`.${openerSelector}`);
        this.popupCloser = document.querySelector(`.${closerSelector}`);

        this.init();
    }

    init() {
        this.overlay.addEventListener('click', this.closeOnOverlayClick.bind(this));
        this.popupOpener.addEventListener('click', this.open.bind(this));
        this.popupCloser.addEventListener('click', this.close.bind(this));
    }

    close() {
        this.overlay.style.display = 'none'
    }

    closeOnOverlayClick({ currentTarget, target }) {
        const isClickedOnBackDrop = target === currentTarget;
        if (isClickedOnBackDrop) {
            this.close();
        }
    }

    open() {
        this.overlay.style.display = 'unset';
        this.popupWindow.style.display = 'unset';
    }
}