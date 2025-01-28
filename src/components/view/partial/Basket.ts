import { IProductBasketData } from "../../../types/components/view/partial/ProductBasket";
import { View } from "../../base/View";
import { IBasketData, IBasketSettings } from '../../../types/components/view/partial/Basket';
import { IListData } from "../../../types/components/view/common/List";

/**
 * @class BasketView - реализация отображения корзины
 */
export class BasketView extends View<IBasketData, IBasketSettings<IListData<IProductBasketData>>> {

    set title(value: string) {
        console.log('Хуй в TITLE');
        this.setValue(this.settings.title, value);
    }

    // TODO: предположение что нужен маппинг IProductBasketData[] -> IListData<IProductBasketData> 
    set products(value: IProductBasketData[]) {
        console.log('ХУЙ в PRODUCTS');

        this.setValue(
            this.settings.basketListView.basketList, 
            this.settings.basketListView.basketListContent.render(this.dataListMappint(value)),
        );
    }

    protected dataListMappint(value: IProductBasketData[]): IListData<IProductBasketData> {
        return { items: value, }
    } 

    set total(value: number) {
        console.log('Хуй в TOTAL');
        this.setValue(this.settings.total, String(value));
    }
}
