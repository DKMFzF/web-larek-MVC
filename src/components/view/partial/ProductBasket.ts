import { 
    IProductBasketSettings, 
    IProductBasketData 
} from "../../../types/components/view/partial/ProductBasket";
import { View } from "../../base/View";

// Отображения продукта в корзине
export class ProductBasketView extends View<IProductBasketData, IProductBasketSettings> {
    protected _item!: IProductBasketData;

    init() {
        this.ensure(this.settings.delete).addEventListener(
            'click',
            this.onClickHandler.bind(this)
        );
    }

    onClickHandler(event: MouseEvent) {
		this.settings.onClick({ event, item: this._item });
	}

    set title(value: string) {
        this.setValue(this.settings.title, value);
    }

    set price(value: string) {
        this.setValue(this.settings.price, value);
    }

    render(data: IProductBasketData) {
		this._item = data;
		return super.render(data);
	}
}
