import {
    IListData,
    IListSettings,
    TElementsMap
} from '../../../types/components/view/common/List';
import { IItemData } from "../../../types/components/view/common/List";
import { View } from "../../base/View";

// универсальный класс списка
export class ListView<T extends IItemData> extends View<IListData<T>, IListSettings<T>> {
    // Сохраняем элементы в объекте, где ключ - id элемента
    protected _elements: TElementsMap;

    /**
	 * Устанавливаем активный элемент
	 */
	setActiveElement(element: HTMLElement) {
		const elements = Object.values(this._elements);
		if (elements.includes(element)) {
			elements.map((element) =>
				element.classList.remove(this.settings.activeItemClass)
			);
			element.classList.add(this.settings.activeItemClass);
		}
	}

	/**
	 * Устанавливаем активный элемент по id
	 */
	setActiveItem(id: string) {
		if (this._elements[id]) {
			this.setActiveElement(this._elements[id]);
		}
	}

	/**
	 * Обновляем отображение списка элементов
	 */
	set items(items: T[]) {
		this._elements = items.reduce<TElementsMap>((result, item) => {
			// Копируем заранее настроенное отображение
			const el = this.settings.item.copy();

			// Добавляем класс элемента
			el.element.classList.add(this.settings.itemClass);

			if (el.element.classList.contains('modal')) console.log('ХУЙ');

			// Заполняем нужными данными и сохраняем в объекте
			result[item.id] = el.render(item);

			// вынужденный говнокод TODO: обязательно исправить
			this.cardListCategoriySet(el.element);
			
			return result;
		}, {});
		this.setValue(this.element, Object.values(this._elements));
	}

	// TODO: переделеать, слишком сильная связь
	// метод устанавливающий категорию карточки
	protected cardListCategoriySet(element: HTMLElement): void {
		if (element.classList.contains('gallery__item')) {
			const cotegory = element.querySelector('.card__category');
			switch (cotegory.textContent) {
				case 'софт-скил':
					cotegory.classList.add('card__category_soft');
					break;
				case 'другое':
					cotegory.classList.add('card__category_other');
					break;
				case 'дополнительное':
					cotegory.classList.add('card__category_additional');
					break;
				case 'хард-скил':
					cotegory.classList.add('card__category_hard');
					break;
				case 'кнопка':
					cotegory.classList.add('card__category_button');
					break;
					
			}
		}
	}
}
