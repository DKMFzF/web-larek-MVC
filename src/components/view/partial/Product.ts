import { View } from '../../base/View';
import { IProductData, IProductSettings } from '../../../types/components/view/partial/Product';

// Класс который показывает продукт в корзине (compact) и в модальном окне (full)
export class ProductView extends View<IProductData, IProductSettings> {
    protected _item: IProductData;

    init() {
        this.ensure(this.settings.addBasket).addEventListener('click', this.onClickHandler.bind(this));
    }

    onClickHandler(event: MouseEvent) {
        this.settings.onClick({ event });
    }

    set title(value: string) {
        this.setValue(this.settings.title, value);
    }

    set category(value: String) {
        this.setValue(this.settings.category, value);
    }

    set description(value: string) {
        this.setValue(this.settings.description, value);
    }

    set price(value: number) {
        this.setValue(this.settings.price, String(value));
    }

    set cover(value: string) {
        this.setValue(this.settings.image, value);
    }
}
