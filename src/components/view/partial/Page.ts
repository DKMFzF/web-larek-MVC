import { View } from '../../base/View';
import { IPageData, IPageSettings } from '../../../types/components/view/partial/Page';

export class PageView extends View<IPageData, IPageSettings> {
    init() {
        this.ensure(this.settings.basket).addEventListener(
			'click',
			this.onClickHandler.bind(this)
		);
    }

    onClickHandler(event: MouseEvent) {
		this.settings.onClick({ event });
	}

    //  метод для установки занчения счетчика товара в корзине
    set counter(value: string) {
        this.setValue(this.settings.counter, value);
    }

    // Метод для блокировки/разблокировки прокерутки страницы
    // при открытии модального окна
    set isLocked(value: string) {
        this.setValue
    }
}
