// import { ModalScreen } from './ModalScreen';
// import { IListData } from '../../../types/components/view/common/List';
// import { IBasketData, IBasketSettings } from '../../../types/components/view/screen/Basket';
// import { IProductData } from '../../../types/components/view/partial/Product';
// import { ListView } from '../common/List';
// import { cloneTemplate } from '../../../utils/html';
// import { SETTINGS } from '../../../utils/constants';
// import { ProductView } from '../partial/Product';
// import { IClickableEvent } from '../../../types/components/base/View';

// export class BasketScreen extends ModalScreen<IListData<IProductData>, IBasketData, IBasketSettings> {
//     initContent() {
//         return new ListView<IProductData>(cloneTemplate(SETTINGS.basketTemplate), {
//             ...SETTINGS.basketSettings,
//             item: new ProductView(cloneTemplate(SETTINGS.productBaksetTemplate), {
//                 ...SETTINGS.productBaksetSettings,
//                 isCompact: true,
//             }),
//         });
//     }

//     protected onRemoveTicket({ item }: IClickableEvent<IProductData>) {
// 		this.settings.onRemove(item.title); // поменять на id
// 	}
// }