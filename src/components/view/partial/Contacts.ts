import { View } from '../../base/View';
import {
	IContactsData,
	IContactsSettings,
} from '../../../types/components/view/partial/Contact';

/**
 * @class ContactsView - форма заказа
 */
export class ContactsView extends View<IContactsData, IContactsSettings> {
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
			phone: this.ensure<HTMLInputElement>(this.settings.phone).value,
            payment: this.ensure<HTMLInputElement>(this.settings.payment).value
		};
	}
	
	set phone(value: string) {
		this.setValue<HTMLInputElement>(this.settings.phone, {
			value,
		});
	}

    set payment(value: string) {
        this.setValue<HTMLInputElement>(this.settings.payment, {
            value
        })
    }
}
