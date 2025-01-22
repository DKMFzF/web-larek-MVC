import { IClickableEvent } from "../../../types/components/base/View";
import { IProductData } from "../../../types/components/view/partial/Product";
import { IProductViewingData, IProductViewingSettings } from "../../../types/components/view/screen/ProductViewing";
import { SETTINGS } from "../../../utils/constants";
import { cloneTemplate } from "../../../utils/html";
import { Screen } from "../../base/Screen";
import { ModalView } from "../common/Modal";
import { ProductView } from "../partial/Product";

// модальное окно просмотра продукта
export class ProductViewingScreen extends Screen<IProductViewingData, IProductViewingSettings> {
    protected declare _modal: ModalView<IProductData>;

    init() {
        this._modal = new ModalView<IProductData>(cloneTemplate(SETTINGS.modalTemplate), {
            ...SETTINGS.modalSettings,
            contentView: new ProductView(cloneTemplate(SETTINGS.productTemplate), {
                ...SETTINGS.productSettings,
                onClick: this.onAddProductInBasket.bind(this)
            }),
            onClose: this.settings.onClose,
            actions: []
        });
    }

    protected onAddProductInBasket({ item }: IClickableEvent<IProductData>) {
        this.settings.addBasket(item);
    }
}
