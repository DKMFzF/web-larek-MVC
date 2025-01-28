import { View } from "../../base/View";
import { ensureElement } from "../../../utils/utils";
import { IEvents } from "../../base/events";
import { SETTINGS, AppStateComponents } from "../../../utils/constants";

interface IModalDataView {
    content: HTMLElement;
}

export class ModalView extends View<IModalDataView> {
    protected _closeButton: HTMLButtonElement;
    protected _content: HTMLElement;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);

        this._closeButton = ensureElement<HTMLButtonElement>(SETTINGS.modalSettings.close, container);
        this._content = ensureElement<HTMLElement>(SETTINGS.modalSettings.content, container);

        this._closeButton.addEventListener('click', this.close.bind(this));
        this.container.addEventListener('click', this.close.bind(this));
        this._content.addEventListener('click', (event) => event.stopPropagation());
    }

    set content(value: HTMLElement) {
        this._content.replaceChildren(value);
    }

    open() {
        this.container.classList.add(SETTINGS.modalSettings.activeClass);
        this.events.emit(AppStateComponents.MODAL.OPEN);
    }

    close() {
        this.container.classList.remove(SETTINGS.modalSettings.activeClass);
        this.content = null;
        this.events.emit(AppStateComponents.MODAL.CLOSE);
    }

    render(data: IModalDataView): HTMLElement {
        super.render(data);
        this.open();
        return this.container;
    }
}
