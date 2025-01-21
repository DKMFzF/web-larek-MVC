import {
    IModalScreenStatusIsActive,
    IModalScreenStatusIsDisabled,
    IModalScreenErrorInfo,
    IModalScreenSettings,
    IModalScreenChangeSettings
} from './ModalScreen';
import { IOrderData } from '../partial/Order';

export interface IOrderFormData 
    extends IModalScreenStatusIsActive, 
        IModalScreenStatusIsDisabled, 
        IModalScreenErrorInfo {
    address: IOrderData;
}

export interface IOrderFormSettings extends IModalScreenSettings, IModalScreenChangeSettings<IOrderData> {}
