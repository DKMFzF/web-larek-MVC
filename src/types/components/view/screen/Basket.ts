import { 
    IModalScreenStatusIsActive,
    IModalScreenStatusIsDisabled,
    IModalScreenSettings
} from './ModalScreen';
import { IProductData } from '../partial/Product';

export interface IBasketData extends IModalScreenStatusIsActive, IModalScreenStatusIsDisabled {
    products: IProductData[];
    totlal: number;
}

export interface IBasketSettings extends IModalScreenSettings {
    onRemove: (id: string) => void;
    // onClose: () => void;
    // onNext: () => void;
}
