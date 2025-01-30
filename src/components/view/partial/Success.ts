import { SETTINGS } from '../../../utils/constants';
import { View } from '../../base/View';

interface ISuccess {
	description: number;
}

interface ISuccessActions {
	onClick: (evt: MouseEvent) => void;
}

export class SuccessView extends View<ISuccess> {
	protected _description: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(container: HTMLElement, actions: ISuccessActions) {
		super(container);

		this._description = container.querySelector(
			SETTINGS.successSettings.description
		);
		this._button = container.querySelector(SETTINGS.successSettings.button);

		if (actions?.onClick)
			this._button.addEventListener('click', actions.onClick);
	}

	set description(price: number) {
		this._description.textContent = `Списано ${price} синапсов`;
	}
}
