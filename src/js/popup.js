export class ModalDialog {
    constructor(dialogId, openerSelector, closerSelector) {
        this.dialog = document.querySelector(`.${dialogId}`);
        this.dialogOpener = document.querySelector(`.${openerSelector}`);
        this.dialogCloser = this.dialog.querySelector(`.${closerSelector}`);

        this.init();
    }


}
