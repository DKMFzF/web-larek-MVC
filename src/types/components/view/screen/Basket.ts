import { 
    IModalScreenStatusIsActive,
    IModalScreenStatusIsDisabled,
    IModalScreenSettings,
    INextButton
} from './ModalScreen';
import { IBasketData } from '../partial/Basket';
import { IProductBasketData } from '../partial/ProductBasket';
import { IListData } from '../common/List';

export interface IBasketScreenData extends IModalScreenStatusIsActive, IModalScreenStatusIsDisabled, INextButton {
    basket: IBasketData;
}

export interface IBasketScreenSettings extends IModalScreenSettings {
    onRemove: (id: string) => void;
}
