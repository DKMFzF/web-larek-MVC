import { View } from '../../base/View';
import {
    IAddressData,
    IAddressSettings,
} from '../../../types/components/view/partial/Address';

/**
 * @class AddressView - форма заказа
 */
export class AddressView extends View<IAddressData, IAddressSettings> {
    init() {
        this.element.addEventListener('submit', this.onSubmitHandler.bind(this));
        this.element.addEventListener('change', this.onSubmitHandler.bind(this));
    }

    onSubmitHandler(event: SubmitEvent) {
        event.preventDefault();
        this.settings.onChange({ event, value: this.data });
        return false;
    }

    get data() {
        return {
            address: this.ensure<HTMLInputElement>(this.settings.address).value,
            email: this.ensure<HTMLInputElement>(this.settings.email).value,
        };
    }

    set address(value: string) {
        this.setValue<HTMLInputElement>(this.settings.address, {
            value
        })
    }

    set email(value: string) {
    	this.setValue<HTMLInputElement>(this.settings.email, {
    		value,
    	});
    }
}
