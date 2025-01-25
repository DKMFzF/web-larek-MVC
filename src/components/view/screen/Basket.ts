import { ModalScreen } from './ModalScreen';
import { IListData } from '../../../types/components/view/common/List';
import { IBasketData, IBasketSettings } from '../../../types/components/view/screen/Basket';
import { ListView } from '../common/List';
import { cloneTemplate } from '../../../utils/html';
import { SETTINGS } from '../../../utils/constants';
import { IProductBasketData } from '../../../types/components/view/partial/ProductBasket';
import { ProductBasketView } from '../partial/ProductBasket';
import { IClickableEvent, IView } from '../../../types/components/base/View';

/**
 * @class BasketScreen - реализация модального окна корзины
 */
export class BasketScreen extends ModalScreen<IListData<IProductBasketData>, IBasketData, IBasketSettings> {
    // тут долно быть создание Basket, basket состоит из List, который состоит из продукторв, от Basket тут только название
    // по факту тут только реализация List с продуктами
    initContent() {
        console.log(`BasketScreen -> initContent()`);
        return new ListView<IProductBasketData>(cloneTemplate(SETTINGS.basketTemplate), {
            ...SETTINGS.basketSettings,
            item: new ProductBasketView(cloneTemplate(SETTINGS.productBasketTemplate), {
                ...SETTINGS.productBasketSettings,
                onClick: this.onRemoveProduct.bind(this),
            }),
        });
    }

    // фнукция которая удаляет продукт из корзины
    protected onRemoveProduct({ item }: IClickableEvent<IProductBasketData>) {
		this.settings.onRemove(item.id); // ссылается на абстракцию в интрефейсе метод onRemove (ссылается на id продукта)
	}

    // метод изменяет состояние корзины
    set productsBasket(products: IProductBasketData[]) {
        console.log(`BasketScreen -> set productsBasket(${products})`); // срабатывает когда включается render
        this.modal.content = { items: products };
        this.nextButton.disabled = !products.length;
    }

    // изменения общего ценника
    // set totalBasket(total: number) {
    //     this.modal.message = `${total} ${SETTINGS.basketModal.totalLabel}`;
    // }
}
