import { ModalScreen } from './ModalScreen';
import { IListData } from '../../../types/components/view/common/List';
import { IBasketData, IBasketSettings } from '../../../types/components/view/screen/Basket';
import { ListView } from '../common/List';
import { cloneTemplate } from '../../../utils/html';
import { SETTINGS } from '../../../utils/constants';
import { IProductBasketData } from '../../../types/components/view/partial/ProductBasket';
import { ProductBasketView } from '../partial/ProductBasket';
import { IClickableEvent } from '../../../types/components/base/View';

export class BasketScreen extends ModalScreen<IListData<IProductBasketData>, IBasketData, IBasketSettings> {
    initContent() {
        return new ListView<IProductBasketData>(cloneTemplate(SETTINGS.basketTemplate), {
            ...SETTINGS.basketSettings,
            item: new ProductBasketView(cloneTemplate(SETTINGS.productBasketTemplate), {
                ...SETTINGS.productBasketSettings,
                onClick: this.onRemoveTicket.bind(this),
            }),
        });
    }

    protected onRemoveTicket({ item }: IClickableEvent<IProductBasketData>) {
		this.settings.onRemove(item.title); // поменять на id
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
