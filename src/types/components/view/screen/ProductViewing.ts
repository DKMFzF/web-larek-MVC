import { IProductData } from "../partial/Product";
import { IModalScreenStatusIsActive, IModalScreenStatusIsDisabled } from "./ModalScreen";

export interface IProductViewingData extends IModalScreenStatusIsActive, IModalScreenStatusIsDisabled  {
    product: IProductData;
}

export interface IProductViewingSettings {
    onClose: () => void;
    // onNext: () => void;
    addBasket: (product: IProductData) => void;
}
