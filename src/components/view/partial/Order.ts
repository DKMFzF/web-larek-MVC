import { AppStateComponents, SETTINGS } from '../../../utils/constants';
import { IEvents } from '../../base/events';
import { FormView } from '../base/Form';

export interface IOrderMethodView {
	payment: string;
	address: string;
}

export class OrderView extends FormView<IOrderMethodView> {
	protected _card: HTMLButtonElement;
	protected _cash: HTMLButtonElement;

	constructor(container: HTMLFormElement, protected events: IEvents) {
		super(container, events);

		this._card = container.elements.namedItem(
			SETTINGS.orderSettings.orderMethodPay.card
		) as HTMLButtonElement;
		this._cash = container.elements.namedItem(
			SETTINGS.orderSettings.orderMethodPay.cash
		) as HTMLButtonElement;

		this.addOnClickHandler(
			this._card,
			SETTINGS.orderSettings.orderMethodPay.card
		);
		this.addOnClickHandler(
			this._cash,
			SETTINGS.orderSettings.orderMethodPay.cash
		);
	}

	protected addOnClickHandler(button: HTMLButtonElement, name: string) {
		button.addEventListener('click', () => {
			[this._card, this._cash].forEach((btn) =>
				btn.classList.remove(SETTINGS.orderSettings.orderMethodPay.active)
			);
			button.classList.add(SETTINGS.orderSettings.orderMethodPay.active);
			this.onInputChange('payment', name);
		});
	}

	protected onInputChange(field: keyof IOrderMethodView, value: string) {
		this.events.emit(AppStateComponents.ORDER.INPUT, { field, value });
	}

	btnsInActive() {
		[this._cash, this._card].forEach((btn) =>
			btn.classList.remove(SETTINGS.orderSettings.orderMethodPay.active)
		);
	}
}
