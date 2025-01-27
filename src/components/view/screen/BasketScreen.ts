import { ModalScreen } from './ModalScreen';
import { IBasketScreenData, IBasketScreenSettings } from '../../../types/components/view/screen/Basket';
import { ListView } from '../common/List';
import { cloneTemplate } from '../../../utils/html';
import { SETTINGS } from '../../../utils/constants';
import { IProductBasketData } from '../../../types/components/view/partial/ProductBasket';
import { ProductBasketView } from '../partial/ProductBasket';
import { IClickableEvent } from '../../../types/components/base/View';
import { BasketView } from '../partial/Basket';
import { IBasketData } from '../../../types/components/view/partial/Basket';

/**
 * @class BasketScreen - реализация модального окна корзины
 */
export class BasketScreen extends ModalScreen<IBasketData, IBasketScreenData, IBasketScreenSettings> {
    protected declare basketContent: BasketView;
    protected declare nextButton: HTMLButtonElement;

    initContent() {
        const templatebasket = cloneTemplate(SETTINGS.basketTemplate);
        const contentListClass = SETTINGS.basketSettings.basketList;

        this.nextButton = this.getNextButton({
            nextLabel: SETTINGS.basketModal.nextButton,
            nextSettings: SETTINGS.basketModal.nextSettings
        }, this.settings.onNext);

        this.basketContent = new BasketView(templatebasket, {
            title: SETTINGS.basketSettings.title,
            basketListView: {
                basketList: SETTINGS.basketSettings.basketList,
                basketListContent: new ListView<IProductBasketData>(templatebasket.querySelector(contentListClass), {
                    ...SETTINGS.basketSettings.list,
                    item: new ProductBasketView(cloneTemplate(SETTINGS.productBasketTemplate), {
                        ...SETTINGS.productBasketSettings,
                        onClick: this.onRemoveProduct.bind(this)
                    }),
                })
            },
            nextButton: SETTINGS.basketSettings.nextButton,
            total: SETTINGS.basketSettings.total,
        });

        return this.basketContent;
    }

    // фнукция которая удаляет продукт из корзины
    protected onRemoveProduct({ item }: IClickableEvent<IProductBasketData>) {
		this.settings.onRemove(item.id); // ссылается на абстракцию в интрефейсе метод onRemove (ссылается на id продукта)
	}

    set basket(basket: IBasketData) {
        this.nextButton.disabled = !basket.products.length;
        this.modal.content = basket;
    }
}
