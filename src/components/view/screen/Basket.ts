// import { ModalScreen } from './ModalScreen';
// import { IListData } from '../../../types/components/view/common/List';
// import { IBasketData, IBasketSettings } from '../../../types/components/view/screen/Basket';
// import { ListView } from '../common/List';
// import { cloneTemplate } from '../../../utils/html';
// import { SETTINGS } from '../../../utils/constants';
// import { IProductBasketData } from '../../../types/components/view/partial/ProductBasket';
// import { ProductBasketView } from '../partial/ProductBasket';
// import { IClickableEvent, IView } from '../../../types/components/base/View';

// import { BasketView } from '../partial/Basket';

// export interface IContentBasketData {
//     title: string;
//     contentBasket: IProductBasketData[];
//     total: number;
// }

// export interface IContentBasketSettings {
//     title: string;
//     contentBasket: IListData<IProductBasketData>;
//     total: string;
// }

// /**
//  * @class BasketScreen - реализация модального окна корзины
//  */
// export class BasketScreen extends ModalScreen<IContentBasketData, IBasketData, IBasketSettings> {
//     initContent() {
//         return this.getBasketContent();
//     }

//     protected getBasketContent(): IView<IContentBasketData> {
//         return new BasketView(cloneTemplate(SETTINGS.basketTemplate), {
//             ...SETTINGS.basketSettings,
//             title: SETTINGS.basketModal.title,
//             contentBasket: this.getListContent(),
//             total: this.getTotalBasket(),
//         });
//     }

//     protected getListContent(): IListData<IProductBasketData> {
//         return new ListView<IProductBasketData>(cloneTemplate(SETTINGS.basketTemplate), {
//             ...SETTINGS.basketSettings,
//             item: new ProductBasketView(cloneTemplate(SETTINGS.productBasketTemplate), {
//                 ...SETTINGS.productBasketSettings,
//                 onClick: this.onRemoveProduct.bind(this),
//             }),
//         });
//     }

//     protected getBasketButton() {
//         return this.getNextButton(SETTINGS.basketModal, this.settings.onNext);
//     }

//     // protected getTotal() {
//     //     return this.
//     // }

//     // фнукция которая удаляет продукт из корзины
//     protected onRemoveProduct({ item }: IClickableEvent<IProductBasketData>) {
// 		this.settings.onRemove(item.id); // ссылается на абстракцию в интрефейсе метод onRemove (ссылается на id продукта)
// 	}

//     set products(products: IProductBasketData[]) {
//         this.modal.content = {
//             contentBasket: products
//         };
//         this.nextButton.disabled = !products.length;
//     }

//     // изменения общего ценника
//     // set totlal(total: number) {
//     //     this.modal.message = `${total} ${SETTINGS.basketModal.totalLabel}`;
//     // }
// }
