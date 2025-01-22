import { IClickableEvent } from "../../../types/components/base/View";
import { IProductData } from "../../../types/components/view/partial/Product";
import { IProductBasketData } from "../../../types/components/view/partial/ProductBasket";
import { IPrewiewScreenData, IPrewiewScreenSettings } from "../../../types/components/view/screen/ProductViewing";
import { SETTINGS } from "../../../utils/constants";
import { cloneTemplate } from "../../../utils/html";
import { Screen } from "../../base/Screen";
import { ModalView } from "../common/Modal";
import { ProductView } from "../partial/Product";

// модальное окно просмотра продукта
export class PrewiewScreen extends Screen<IPrewiewScreenData, IPrewiewScreenSettings> {
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

        this.element = this._modal.element;
    }

    protected onAddProductInBasket({ item }: IClickableEvent<IProductBasketData>) {
        this.settings.addInBasket(item);
    }
}
