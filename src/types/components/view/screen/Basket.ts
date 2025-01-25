import { 
    IModalScreenStatusIsActive,
    IModalScreenStatusIsDisabled,
    IModalScreenSettings
} from './ModalScreen';
import { IProductBasketData } from '../partial/ProductBasket';

export interface IBasketScreenData extends IModalScreenStatusIsActive, IModalScreenStatusIsDisabled {
    products: IProductBasketData[];
    totlal: string;
}

export interface IBasketScreenSettings extends IModalScreenSettings {
    onRemove: (id: string) => void;
}
