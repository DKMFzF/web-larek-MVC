import { View } from '../../base/View';
import { ICardData, ICardSettings } from '../../../types/components/view/partial/Card';

/**
 * @class CardView - маленькая карточка продукта для списка
 */
export class CardView extends View<ICardData, ICardSettings> {
	id: string;

	init() {
		this.element.addEventListener('click', this.onClickHandler.bind(this));
	}

	onClickHandler(event: MouseEvent) {
		this.settings.onClick({ event, item: this.id });
	}

	set image(value: string) {
		this.setValue<HTMLImageElement>(this.settings.imageUrl, {
			src: value,
		});
	}

	set title(value: string) {
		this.setValue(this.settings.title, value);
        // this.setValue(this.settings.category, value);
        this.setValue<HTMLImageElement>(this.settings.imageUrl, {
			alt: value,
		});
	}
}
