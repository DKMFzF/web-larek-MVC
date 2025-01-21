import { View } from '../../base/View';
import {
    IOrderData,
    IOrderSettings,
} from '../../../types/components/view/partial/Order';

/**
 * @class OrderView - форма заказа с полями адреса и выбора способа оплаты
 */
export class OrderView extends View<IOrderData, IOrderSettings> {
    init() {
        this.element.addEventListener('submit', this.onSubmitHandler.bind(this));
        this.element.addEventListener('change', this.onSubmitHandler.bind(this));
        const buttons = this.ensure(this.settings.payment).querySelectorAll<HTMLButtonElement>('button');
        buttons.forEach(button => button.addEventListener('click', this.onPaymentSelect.bind(this)));
    }

    onSubmitHandler(event: SubmitEvent): boolean {
        event.preventDefault();
        this.settings.onChange({ event, value: this.data });
        return false;
    }

    onPaymentSelect(event: MouseEvent) {
        const button = event.target as HTMLButtonElement;
        if (!button) return;
        this.payment = button.name;
        const buttons = this.ensure(this.settings.payment).querySelectorAll<HTMLButtonElement>('button');
        buttons.forEach(btn => btn.classList.toggle('button_alt_active', btn === button));
    }

    get data(): IOrderData {
        return {
            payment: this.ensure(this.settings.payment).querySelector('.button_alt_active')?.getAttribute('name') ?? '',
            address: this.ensure<HTMLInputElement>(this.settings.address).value,
        };
    }

    set payment(value: string) {
        this.setValue<HTMLInputElement>(this.settings.payment, { value })
    }

    set address(value: string) {
        this.setValue<HTMLInputElement>(this.settings.address, { value })
    }
}
