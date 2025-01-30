import { AppStateComponents } from '../../../utils/constants';
import { IEvents } from '../../base/events';
import { FormView } from '../base/Form';

export interface IContactsView {
	email: string;
	phone: string;
}

export class ContactsView extends FormView<IContactsView> {
	constructor(container: HTMLFormElement, protected event: IEvents) {
		super(container, event);
	}

	protected onInputChange(field: keyof IContactsView, value: string) {
		this.events.emit(AppStateComponents.CONTACT.INPUT, { field, value });
	}
}
