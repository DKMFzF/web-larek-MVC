import { handlePrice } from '../../../utils/utils';
import { View } from '../../base/View';
import { IEvents } from '../.././base/events';
import { AppStateComponents, SETTINGS } from '../../../utils/constants';

export interface IBasketView {
	list: HTMLElement[];
	total: number;
}

export class BasketView extends View<IBasketView> {
	protected _list: HTMLElement;
	protected _total: HTMLElement;
	protected _button: HTMLButtonElement;

	// Конструктор принимает имя блока, родительский элемент и обработчик событий
	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);

		this._button = container.querySelector(SETTINGS.basketSettings.button);
		this._total = container.querySelector(SETTINGS.basketSettings.total);
		this._list = container.querySelector(SETTINGS.basketSettings.list);

		if (this._button)
			this._button.addEventListener('click', () =>
				this.events.emit(AppStateComponents.BASKET.ORDER)
			);
	}

	// Сеттер для общей цены
	set total(price: number) {
		this._total.textContent = handlePrice(price) + ' синапсов';
	}

	// Сеттер для списка товаров
	set list(items: HTMLElement[]) {
		this._list.replaceChildren(...items);
		this._button.disabled = items.length ? false : true;
	}

	// Метод отключающий кнопку "Оформить"
	disableButton() {
		this._button.disabled = true;
	}

	// Метод для обновления индексов таблички при удалении товара из корзины
	refreshIndices() {
		Array.from(this._list.children).forEach(
			(item, index) =>
				(item.querySelector(SETTINGS.productBasketSettings.id)!.textContent = (
					index + 1
				).toString())
		);
	}
}
