import { IOrderMethod } from "../../../types";
import { SETTINGS } from "../../../utils/constants";
import { IEvents } from "../../base/events";
import { FormView } from "../base/Form";

export class OrderView extends FormView<IOrderMethod> {
    protected _card: HTMLButtonElement
    protected _cash: HTMLButtonElement

    constructor(container: HTMLFormElement, protected events: IEvents) {
        super(container, events);

        this._card = container.elements.namedItem(SETTINGS.orderSettings.orderMethodPay.card) as HTMLButtonElement;
        this._cash = container.elements.namedItem(SETTINGS.orderSettings.orderMethodPay.cash) as HTMLButtonElement;

        if (this._cash) {
            this._cash.addEventListener('click', () => {
              this._cash.classList.add(SETTINGS.orderSettings.orderMethodPay.active)
              this._card.classList.remove(SETTINGS.orderSettings.orderMethodPay.active)
              this.onInputChange('payment', 'cash')
            })
        }

        if (this._card) {
            this._card.addEventListener('click', () => {
                this._card.classList.add(SETTINGS.orderSettings.orderMethodPay.active)
                this._cash.classList.remove(SETTINGS.orderSettings.orderMethodPay.active)
                this.onInputChange('payment', 'card')
            })
        }
    }

    // Метод, отключающий подсвечивание кнопок
    disableButtons() {
        this._cash.classList.remove(SETTINGS.orderSettings.orderMethodPay.active)
        this._card.classList.remove(SETTINGS.orderSettings.orderMethodPay.active)
    }
}
