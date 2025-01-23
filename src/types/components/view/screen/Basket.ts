import { 
    IModalScreenStatusIsActive,
    IModalScreenStatusIsDisabled,
    IModalScreenSettings
} from './ModalScreen';
import { IProductBasketData } from '../partial/ProductBasket';

export interface IBasketData extends IModalScreenStatusIsActive, IModalScreenStatusIsDisabled {
    products: IProductBasketData[];
    totlal: string;
}

export interface IBasketSettings extends IModalScreenSettings {
    onRemove: (id: string) => void;
}
