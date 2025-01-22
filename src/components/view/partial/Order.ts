import { View } from '../../base/View';
import {
    IOrderData,
    IOrderSettings,
    TPayment,
} from '../../../types/components/view/partial/Order';

/**
 * @class OrderView - форма заказа с полями адреса и выбора способа оплаты
 */
export class OrderView extends View<IOrderData, IOrderSettings> {
    protected isPatment: boolean | null = null;

    init() {
        this.element.addEventListener('submit', this.onSubmitHandler.bind(this));
        this.element.addEventListener('change', this.onSubmitHandler.bind(this));
    }

    onSubmitHandler(event: SubmitEvent): boolean {
        event.preventDefault();
        this.settings.onChange({ event, value: this.data });
        return false;
    }

    get data(): IOrderData {
        return {
            payment: this.getSelectedPaymentMethod(),
            address: this.ensure<HTMLInputElement>(this.settings.address).value.trim(),
        };
    }

    // метод проверки выбранного способа оплаты
    private getSelectedPaymentMethod(): TPayment | null {
        const cashButton = this.ensure<HTMLButtonElement>(this.settings.cash);
        const cardButton = this.ensure<HTMLButtonElement>(this.settings.card);
    
        if (cashButton.classList.contains('button_alt-active')) {
            return 'online';
        } else if (cardButton.classList.contains('button_alt-active')) {
            return 'upon receipt';
        }
        return null; // Если ни один способ не выбран
    }
}
