import { IProductBasketData } from "../../../types/components/view/partial/ProductBasket";
import { View } from "../../base/View";
import { IBasketData, IBasketSettings } from '../../../types/components/view/partial/Basket';
import { IListData } from "../../../types/components/view/common/List";
import { TElementAttrs } from "../../../types/html";

/**
 * @class BasketView - реализация отображения корзины
//  */
// export class BasketView extends View<IBasketData, IBasketSettings<IListData<IProductBasketData>>> {

//     set title(value: string) {
//         console.log('Хуй в TITLE');
//         this.setValue(this.settings.title, value);
//     }

//     set products(value: IListData<IProductBasketData>) { // 2
//         console.log('ХУЙ в PRODUCTS');
//         if (value.items) {
//             console.log(value)
//             this.setValue(this.settings.basketList, this.settings.basketListView.render(value));
//         }
//     }

//     set total(value: number) {
//         console.log('Хуй в TOTAL');
//         this.setValue(this.settings.total, String(value));
//     }
// }

export class BasketView extends View<IBasketData, IBasketSettings<IListData<IProductBasketData>>> {

    set title(value: string) {
        this.setValue(this.settings.title, value);
    }

    set products(value: IListData<IProductBasketData>) { // 2
        if (value.items) {
            console.log(value)
            this.setValue(this.settings.basketList, this.settings.basketListView.render(value));
        }
    }

    set total(value: number) {
        this.setValue(this.settings.total, String(value));
    }
}
