import { ModalScreen } from './ModalScreen';
import { IListData } from '../../../types/components/view/common/List';
import { IBasketData, IBasketSettings } from '../../../types/components/view/screen/Basket';
import { ListView } from '../common/List';
import { cloneTemplate } from '../../../utils/html';
import { SETTINGS } from '../../../utils/constants';
import { IProductBasketData } from '../../../types/components/view/partial/ProductBasket';
import { ProductBasketView } from '../partial/ProductBasket';
import { IClickableEvent } from '../../../types/components/base/View';

// TODO: посмотреть реализацию через Card

/**
 * @class BasketScreen - реализация модального окна корзины
 */
export class BasketScreen extends ModalScreen<IListData<IProductBasketData>, IBasketData, IBasketSettings> {
    initContent() {
        return new ListView<IProductBasketData>(cloneTemplate(SETTINGS.basketTemplate), {
            ...SETTINGS.basketSettings,
            item: new ProductBasketView(cloneTemplate(SETTINGS.productBasketTemplate), {
                ...SETTINGS.productBasketSettings,
                onClick: this.onRemoveProduct.bind(this), // ставим на ProductBasketView листенер
            }),
        });
    }

    // фнукция которая удаляет продукт из корзины
    protected onRemoveProduct({ item }: IClickableEvent<IProductBasketData>) {
		this.settings.onRemove(item.id); // ссылается на абстракцию в интрефейсе метод onRemove (ссылается на id продукта)
	}

    set productsBasket(products: IProductBasketData[]) {
        this.modal.content = {
            items: products,
        };
        this.nextButton.disabled = !products.length;
    }

    set totalBasket(total: number) {
        this.modal.message = `${total} ${SETTINGS.basketModal.totalLabel}`;
    }
}
