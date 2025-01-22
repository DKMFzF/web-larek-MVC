import { IProductData } from "../partial/Product";
import { IProductBasketData } from "../partial/ProductBasket";
import { IModalScreenStatusIsActive, IModalScreenStatusIsDisabled } from "./ModalScreen";

export interface IPrewiewScreenData extends IModalScreenStatusIsActive, IModalScreenStatusIsDisabled  {
    product: IProductData;
}

export interface IPrewiewScreenSettings {
    onClose: () => void;
    addInBasket: (product: IProductBasketData) => void;
}
